const express = require('express');
const router = express.Router();
const pmpController = require('../controllers/pmp.controller');
const {appLogger} = require('../logs/logger');

/* helper functions */
const callController = async (route, controllerFunc, req, res)=>{
    appLogger.info(`[RECEIVED]: Request ${JSON.stringify(req.query)} for ${route}`);
    controllerFunc(req).then((response)=>{
        appLogger.info(`[SENDING]: Response ${JSON.stringify(response)} for ${route}`);
        res.status(response.status).send(response);
    });
}

/* --- Routes --- */
router.get('/practicemanagements', async (req,res,next)=>{
    /**
     * Get all practice managements information (data on which patient is in contact with what doctors in the system)
     * @route /practicemanagments
     * @method get
     * @param {JSON} req - request message of format
     * @param {JSON} res - response message {status, success, data:[{patientId,doctorId,visitCount}, ...], message}
     * @return {void} The function doesnot return any thing but the the responds client with the response message
     */
    callController('/practicemanagements',pmpController.getPracticeManagementDetails, req, res);
});

router.post('/practicemanagement', async (req,res,next)=>{
    /**
     * Record an interations between patient and doctor (interaction = appointment)
     * This must be done after adding a doctor in Practice Management Portal system.
     * @route /practicemanagment
     * @method post
     * @param {JSON} req - request message of format {patientid,doctorid}
     * @param {JSON} res - response message {status, success, message}
     * @return {void} The function doesnot return any thing but the the responds client with the response message
     */
    callController('/practicemanagement', pmpController.addPracticeManagementDetails, req, res);
});


/* Doctors */
router.get('/doctors', async (req,res,next)=>{
    /**
     * This is a route for getting details for all doctors.
     * @route /doctors
     * @method get
     * @param {JSON} req - request message of format
     * @param {JSON} res - response message {status, success, data: [{doctorId, ...appointmentTeamsDoctorDetails, departmentId, doctorDescription, totalPatients, yearsOfExperience}, ... ], message}
     * @return {void} The function doesnot return any thing but the the responds client with the response message
     */
    callController('/doctors', pmpController.getDoctors, req, res);
});

router.get('/doctor', async (req,res,next)=>{
    /**
     * This is a route for getting a doctor details by their doctorId.
     * @route /doctor
     * @method get
     * @param {JSON} req - request message of format {doctorId}
     * @param {JSON} res - response message {status, success, data: {doctorId, ...appointmentTeamsDoctorDetails, departmentId, doctorDescription, totalPatients, yearsOfExperience}, message}
     * @return {void} The function doesnot return any thing but the the responds client with the response message
     */
    callController('/doctor', pmpController.getDoctor ,req, res);    
});

router.post('/doctor', async (req,res,next)=>{
    /**
     * This is a route for adding a new doctor into the Practice management portal.
     * @route /doctor
     * @method post
     * @param {JSON} req - request message of format {doctorId, departmentId, doctorDescription}
     * @param {JSON} res - response message {status, success, message}
     * @return {void} The function doesnot return any thing but the the responds client with the response message
     */
    callController('/doctor', pmpController.addDoctorDetails,req, res) ;
});

router.put('/doctor', async (req,res,next)=>{
    /**
     * This is a route for editing existing doctor's details.
     * @route /doctor
     * @method put
     * @param {JSON} req - request message of format {doctorId, doctorDescription}
     * @param {JSON} res - response message {status, success, message}
     * @return {void} The function doesnot return any thing but the the responds client with the response message
     */
    callController('/doctor', pmpController.editDoctorDetails ,req,res);
});


/* Nurse */
router.get('/nurses', async (req,res,next)=>{
    /**
     * This is a route for getting all nurses.
     * @route /nurses
     * @method get
     * @param {JSON} req - request message of format
     * @param {JSON} res - response message {status, success, data: [{nurseId, nurseName, nurseFirstName, nurseMiddleName, nurseLastName , age, address, contactNo, description}, ...], message}
     * @return {void} The function doesnot return any thing but the the responds client with the response message
     */
    callController('/nurses', pmpController.getNurses ,req, res);
});
router.get('/nurse', async (req,res,next)=>{
    /**
     * This is a route for getting a single nurse details.
     * @route /nurse
     * @method get
     * @param {JSON} req - request message of format {nurseId}
     * @param {JSON} res - response message {status, success, data: {nurseId, nurseName, nurseFirstName, nurseMiddleName, nurseLastName , age, address, contactNo, description}, message}
     * @return {void} The function doesnot return any thing but the the responds client with the response message
     */
    callController('/nurse', pmpController.getNurse ,req, res);
});
router.post('/nurse', async (req,res,next)=>{
    /**
     * This is a route for adding a new nurse to the Practice management portal.
     * @route /nurse
     * @method post
     * @param {JSON} req - request message of format {nurseId, nurseName, nurseFirstName, nurseMiddleName, nurseLastName , age, address, contactNo, description}
     * @param {JSON} res - response message {status, success, message}
     * @return {void} The function doesnot return any thing but the the responds client with the response message
     */
    callController('/nurse', pmpController.addNurseDetails ,req,res);
});
router.put('/nurse', async (req,res,next)=>{
    /**
     * This is a route for adding a new nurse to the Practice management portal.
     * @route /nurse
     * @method put
     * @param {JSON} req - request message of format {nurseId, nurseName, nurseFirstName, nurseMiddleName, nurseLastName , age, address, contactNo, description}
     * @param {JSON} res - response message {status, success, message}
     * @return {void} The function doesnot return any thing but the the responds client with the response message
     */
    callController('/nurse', pmpController.editNurseDetails ,req,res);
});


/* Practice Manager */
router.get('/managers', async (req,res,next)=>{
    /**
     * This is a route for getting all managers.
     * @route /managers
     * @method get
     * @param {JSON} req - request message of format
     * @param {JSON} res - response message {status, success, data: [{nurseId, nurseName, nurseFirstName, nurseMiddleName, nurseLastName , age, address, contactNo, description}, ...], message}
     * @return {void} The function doesnot return any thing but the the responds client with the response message
     */
    callController('/managers', pmpController.getManagers ,req, res);
});
router.get('/manager', async (req,res,next)=>{
    /**
     * This is a route for getting a single manager details.
     * @route /manager
     * @method get
     * @param {JSON} req - request message of format {managerId}
     * @param {JSON} res - response message {status, success, data: {managerId, managerName, managerFirstName, managerMiddleName, managerLastName , age, address, contactNo, description}, message}
     * @return {void} The function doesnot return any thing but the the responds client with the response message
     */
    callController('/manager', pmpController.getManager ,req, res);
});
router.post('/manager', async (req,res,next)=>{
    /**
     * This is a route for adding a new manager to the Practice management portal.
     * @route /manager
     * @method post
     * @param {JSON} req - request message of format {managerId, managerName, managerFirstName, managerMiddleName, managerLastName , age, address, contactNo, description}
     * @param {JSON} res - response message {status, success, message}
     * @return {void} The function doesnot return any thing but the the responds client with the response message
     */
    callController('/manager', pmpController.addManagerDetails ,req,res);
});
router.put('/manager', async (req,res,next)=>{
    /**
     * This is a route for adding a new manager to the Practice management portal.
     * @route /manager
     * @method put
     * @param {JSON} req - request message of format {managerId, managerName, managerFirstName, managerMiddleName, managerLastName , age, address, contactNo, description}
     * @param {JSON} res - response message {status, success, message}
     * @return {void} The function doesnot return any thing but the the responds client with the response message
     */
    callController('/manager', pmpController.editManagerDetails ,req,res);
});



module.exports = router;
