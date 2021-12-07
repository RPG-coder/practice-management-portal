/* --- Import Files --- */
const database = require("../models");
const { errorLogger, activityLogger } = require("../logs/logger");

// Department Controls
const departmentIdToNameMapping = {
    '1':'Anesthetic', 
    '2':'Breast Screening', 
    '3':'Cardiology', 
    '4':'Ear, nose and throat (ENT)', 
    '5':'Gastroenterology', 
    '6':'General Surgery', 
    '7':'Gynecology', 
    '8':'Hematology', 
    '9':'Neonatal Unit', 
    '10':'Neurology', 
    '11':'Nutrition and dietetics', 
    '12':'Obstetrics and gynecology units', 
    '13':'Oncology', 
    '14':'Orthopedics', 
    '15':'Physiotherapy', 
    '16':'Renal Unit', 
    '17':'Sexual Health', 
    '18':'Urology'
}
const departmentNameToIdMapping = {};
Object.keys(departmentIdToNameMapping).map((e)=>{
    departmentNameToIdMapping[departmentIdToNameMapping[e]] = e;
})

/* Helper Functions */
/* Server-side Error Handling */
const processSafely = async (initialCondition, executingFunction, req)=>{
    let request = (req.method.toLowerCase()==="post"||req.method.toLowerCase()==="put")?req.body:req.query;
    try{
        if(initialCondition){
            activityLogger.info(`Received request message ${JSON.stringify(request)} for an User Register\n`);
            return await executingFunction(req); // This function must return response of format  {status: 200 | 400('s) , success: 1 | 0 , data?: [] | {} , message: "string for debug purpose"}
        }else{
            /* Response Object on request format error */
            errorLogger.error({status: 400, success: 0, message: "Bad Request | Request message format unsupported!"}, request);
            return {status: 400, success: 0, message: "Bad Request | Request message format unsupported!"};
        }
    }catch(err){
        /* Response Object on error from database */
        errorLogger.error({ status: 500, success: 0, message: "Internal Server Error", error: err }, request);
        return { status: 500, success: 0, message: "Internal Server Error"};
    };
}

const getCurrentTimestamp = ()=>{
    let date_ob = new Date();

    // current date
    // adjust 0 before single digit date
    let date = ("0" + date_ob.getDate()).slice(-2);

    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    // current year
    let year = date_ob.getFullYear();

    // current hours
    let hours = date_ob.getHours();

    // current minutes
    let minutes = date_ob.getMinutes();

    // current seconds
    let seconds = date_ob.getSeconds();
    return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
}

/* Controller Interfaces */
/* Practice Management */
exports.getPracticeManagementDetails = async (req)=>{
    /**
     * Get all Interaction between doctor and patient in the PMP system
     * @function getPracticeManagementDetails
     * @param {JSON} req - request object: nothing other than (authorization: far vision task)
     * @returns {JSON} a response object: {status, success, data:[{patientId,doctorId,visitCount}, ...], message}
     **/

    return await processSafely((req.query.patientId && req.query.doctorId), async (req)=>{
        return {
            status: 200,
            success: 1,
            data: await database["practice_managements"].findAll({ 
                where: { patientId: req.query.patientId, doctorId: req.query.doctorId },
                attributes: ['patientId', 'doctorId', 'visitCount']
            }),
            message: "Found all matches!"
        }
        //{status, success, data:[{patientId,doctorid,visitCount}, ...], message}
    }, req);
}

exports.addPracticeManagementDetails = async (req)=>{
    /**
     * @function addPracticeManagementDetails
     * @param {JSON} req - request object: {patientid,doctorid}
     * @returns {JSON} a response object: {status, success, message}
     **/

     return await processSafely((req.body.patientId && req.body.doctorId), async (req)=>{
        let interaction = await database["practice_managements"].findOne({where: {patientId: req.body.patientId, doctorId: req.body.doctorId}});
        let stat = 0;

        if(!interaction){
            interaction = await database["practice_managements"].create({ 
                patientId: req.body.patientId, doctorId: req.body.doctorId,
                created_at: getCurrentTimestamp(), updated_at: getCurrentTimestamp()
            });
        }else{
            stat = 1;
            interaction.visitCount = interaction.visitCount + 1;
            interaction.save();
        }
        console.log(stat,'stat');
        return {
            status: 200,
            success: 1,
            data: interaction,
            message: ((stat)?"Successfully Updated Visit!":"Successfully added!")
        }
    }, req);
}


/* Employee Related */
exports.getDoctors = async (req)=>{
    /**
     * Get all Doctors in the PMP system.
     * @function getDoctors
     * @param {JSON} req - request object: nothing other than (authorization: far vision task)
     * @returns {JSON} a response object: {status, success, data: [{doctorId, ...appointmentTeamsDoctorDetails, departmentId, doctorDescription, totalPatients, yearsOfExperience}, ... ], message}
     **/

     

     return await processSafely((true), async (req)=>{
        
        let docterData = await database["doctors"].findAll({ 
            attributes: ['doctorId', 'departmentId', 'doctorDescription', 'totalPatients', 'yearsOfExperience']
        })
        const doctorDetails = []
        docterData.forEach(element => {

            // Call from appointment scheduling API for doctors by doctorId and get this doctor details here ... and its data with below 
            let appointmentTeamDoctorDetails = {name:"Hector J nector", email: "hector@practiceehr.com", departmentName: "Neurology"};
            
            //console.log({doctorId: element.doctorId, departmentId: element.departmentId, doctorDescription:element.doctorDescription, totalPatients: element.totalPatients , yearsOfExperience: element.yearsOfExperience, ...appointmentTeamDoctorDetails});
            doctorDetails.push({doctorId: element.doctorId, departmentId: element.departmentId, doctorDescription:element.doctorDescription, totalPatients: element.totalPatients , yearsOfExperience: element.yearsOfExperience, ...appointmentTeamDoctorDetails});
        });
        
        return {
             status: 200,
             success: 1,
             data: doctorDetails,
             message: "Found all matches!"
         }
         // [{doctorId, ...appointmentTeamsDoctorDetails, departmentId, doctorDescription, totalPatients, yearsOfExperience}, ... ], message}
     }, req);
}

exports.getDoctor = async (req)=>{
    /**
     * Get a Doctor details in the PMP system.
     * @function getDoctors
     * @param {JSON} req - request object: nothing other than (authorization: far vision task)
     * @returns {JSON} a response object: {status, success, data: {doctorId, ...appointmentTeamsDoctorDetails, departmentId, doctorDescription, totalPatients, yearsOfExperience}, message}
     **/

    return await processSafely((req.query.doctorId), async (req)=>{
        let doctor = await database["doctors"].findOne({
            where: {doctorId: req.query.doctorId},
            attributes: ['doctorId', 'departmentId', 'doctorDescription', 'totalPatients', 'yearsOfExperience']
        })

        if(doctor){
            // Call from appointment scheduling API for doctors by doctorId and get this doctor details here ... and its data with below 
            let appointmentTeamDoctorDetails = {name:"Hector J nector", email: "hector@practiceehr.com", departmentName: "Neurology"};
                
            //console.log({doctorId: doctor.doctorId, departmentId: doctor.departmentId, doctorDescription:doctor.doctorDescription, totalPatients: doctor.totalPatients , yearsOfExperience: doctor.yearsOfExperience, ...appointmentTeamDoctorDetails});
            const doctorDetails = {doctorId: doctor.doctorId, departmentId: doctor.departmentId, doctorDescription:doctor.doctorDescription, totalPatients: doctor.totalPatients , yearsOfExperience: doctor.yearsOfExperience, ...appointmentTeamDoctorDetails};
            return {
                status: 200,
                success: 1,
                data: doctorDetails,
                message: "Match found!"
            }
        }
        return {
            status: 200,
            success: 1,
            data: [],
            message: "No Match found!"
        }
    },req);
}

exports.addDoctorDetails = async (req)=>{
    /**
     * Add a Doctor details in the PMP system.
     * @function addDoctorDetails
     * @param {JSON} req - request object: {doctorId, departmentName}
     * @returns {JSON} a response object: {status, success, data: {doctorId, departmentId, doctorDescription, totalPatients, yearsOfExperience}, message}
     **/

    return await processSafely((req.body.doctorId && req.body.departmentName), async (req)=>{
        //const departmentDetails = await database["department"].findOne({where: {departmentName: req.body.departmentName}}); // method 2
        const doctor = await database["doctors"].create({ 
            doctorId: req.body.doctorId, 
            departmentId: departmentNameToIdMapping[req.body.departmentName]/*method 2: departmentDetails.departmentId*/, 
            doctorDescription: "", 
            created_at: getCurrentTimestamp(), updated_at: getCurrentTimestamp() 
        });
        return {
            status: 200,
            success: 1,
            data: {
                doctorId: doctor.doctorId,
                departmentId: doctor.departmentId,
                totalPatients: doctor.totalPatients,
                yearsOfExperience: doctor.yearsOfExperience,
                doctorDescription: doctor.doctorDescription
            },
            message: "Successfully added!"
        }
    }, req);
}

exports.editDoctorDetails = async (req)=>{
    /**
     * Edit an existing Doctor details in the PMP system.
     * @function addDoctorDetails
     * @param {JSON} req - request object: {doctorId, departmentName}
     * @returns {JSON} a response object: {status, success, data: {doctorId, departmentId, doctorDescription, totalPatients, yearsOfExperience}, message}
     **/

     return await processSafely((req.body.doctorId && req.body.doctorDescription), async (req)=>{
        //const departmentDetails = await database["department"].findOne({where: {departmentName: req.body.departmentName}}); // method 2
        const doctor = await database["doctors"].findOne({ 
            where: {doctorId: req.body.doctorId},
        });

        if(doctor){
            doctor.doctorId = req.body.doctorId
            doctor.doctorDescription = req.body.doctorDescription;
            doctor.updated_at =  getCurrentTimestamp();
            doctor.save();

            return {
                status: 200,
                success: 1,
                data: {
                    doctorId: doctor.doctorId,
                    departmentId: doctor.departmentId,
                    totalPatients: doctor.totalPatients,
                    yearsOfExperience: doctor.yearsOfExperience,
                    doctorDescription: doctor.doctorDescription
                },
                message: "Successfully updated!"
            }
        }
    }, req);
}

exports.getNurses = async (req)=>{
    /**
     * Get all Nurses in the PMP system.
     * @function getNurses
     * @param {JSON} req - request object: nothing other than (authorization: far vision task)
     * @returns {JSON} a response object: {status, success, data:[{nurseId,nurseFirstName,nurseMiddleName,nurseLastName,age, contactNo, description}, ...], message}
     **/

     return await processSafely((true), async (req)=>{
        let nurse = await database["nurses"].findAll({
            attributes: ['nurseId','nurseFirstName','nurseMiddleName','nurseLastName','age', 'contactNo', 'description']
        })

        if(nurse){
            return {
                status: 200,
                success: 1,
                data: nurse,
                message: "Match found!"
            }
        }
        return {
            status: 200,
            success: 1,
            data: [],
            message: "No Match found!"
        }
    },req);
}

exports.getNurse = async (req)=>{
    /**
     * Get a Nurse details in the PMP system.
     * @function getNurse
     * @param {JSON} req - request object: nothing other than (authorization: far vision task)
     * @returns {JSON} a response object: {status, success, data:[{patientId,doctorId,visitCount}, ...], message}
     **/

     return await processSafely((req.query.nurseId), async (req)=>{
        let nurse = await database["nurses"].findOne({
            where: {nurseId: req.query.nurseId},
            attributes: ['nurseId','nurseFirstName','nurseMiddleName','nurseLastName','age', 'contactNo', 'description']
        })

        if(nurse){
            return {
                status: 200,
                success: 1,
                data: nurse,
                message: "Match found!"
            }
        }
        return {
            status: 200,
            success: 1,
            data: [],
            message: "No Match found!"
        }
    },req);
}

exports.addNurseDetails =


exports.editNurseDetails =

exports.getManagers = async (req)=>{
    /**
     * Get all Managers in the PMP system.
     * @function getManagers
     * @param {JSON} req - request object: nothing other than (authorization: far vision task)
     * @returns {JSON} a response object: {status, success, data:[{patientId,doctorId,visitCount}, ...], message}
     **/

     return await processSafely((true), async (req)=>{
        let manager = await database["practice_managers"].findAll({
            attributes: ['managerId','managerFirstName','managerMiddleName','managerLastName','age', 'contactNo', 'description']
        })

        if(manager){
            return {
                status: 200,
                success: 1,
                data: manager,
                message: "Match found!"
            }
        }
        return {
            status: 200,
            success: 1,
            data: [],
            message: "No Match found!"
        }
    },req);
}

exports.getManager = async (req)=>{
    /**
     * Get a Manager detail in the PMP system.
     * @function getManager
     * @param {JSON} req - request object: nothing other than (authorization: far vision task)
     * @returns {JSON} a response object: {status, success, data:[{patientId,doctorId,visitCount}, ...], message}
     **/

     return await processSafely((req.query.managerId), async (req)=>{
        let manager = await database["practice_managers"].findOne({
            where: {managerId: req.query.managerId},
            attributes: ['managerId','managerFirstName','managerMiddleName','managerLastName','age', 'contactNo', 'description']
        })

        if(manager){
            return {
                status: 200,
                success: 1,
                data: manager,
                message: "Match found!"
            }
        }
        return {
            status: 200,
            success: 1,
            data: [],
            message: "No Match found!"
        }
    },req);
}

exports.addManagerDetails = 

exports.editManagerDetails = "";