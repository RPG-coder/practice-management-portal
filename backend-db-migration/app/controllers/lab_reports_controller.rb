class LabReportsController < ApplicationController

    def new
        begin
            puts "Hello World"
=begin
            LabReport.create(
                patientId: params[:patientId], doctorId: params[:doctorId], reportId: params[:labId], 
                reportName: params[:labworkName],  worksheetFilepath: params[:labworkFilePath], #patientFilepath: params[:patientReportFilePath]
                dueBy: params[:dueBy], descriptopn: params[:description]
            )
            format.json { render json: {'status':200, 'success':1, 'data': 'Hello world create', 'message': 'Successfully added a lab report!'} } 
=end
            format.json { render json: {'status':200, 'success':1, 'data': 'Hello world create', 'message': 'Successfully added a lab report!'} } 
        rescue
            format.json { render json: {'status':500, 'success':0, 'data': nil, 'message': '[FAILURE]: Unsuccessful at addeding new lab report!'} }
        end
    end
=begin
    def edit
    end
    def delete
    end
    def show
        begin
            #@product = Product.find(params[:patientId],params[:doctorId],params[:labId]) 
            return {'status': 200, 'success': 1, 'data': "Hello", 'message': `[SUCCESS]: lab report #{params[:patientId]} is sucessfully shared!`}
        rescue
            return {'status':200, 'success':0, 'data': nil, 'message': '[FAILURE]: Error in fetching the report'}
        end

    end
=end
    def index
        # Return all patient's lab records. If no record is present for a patient (empty/new patient), gives 404 NOT FOUND
        begin
            @lab_reports = LabReport.all.to_json
            if @lab_reports === "[]"
                render :json => {status: 404, success: 1, data: @lab_reports, message: "No Record Found! Possibly a new Patient"}
            else
                render :json => {status: 200, success: 1, data: @lab_reports, message: "Successful at displaying lab reports"}
            end    
        rescue
            render :json => {status: 500, success: 0, message: "[FAILURE]: Unsuccessful at getting all lab reports"}
        end
    end

    def product_params
=begin
        params.require(:lab_report).permit(:patientId, :doctorId, :labId, :labworkName, :labworkFilePath , :patientReportFilePath, :description)
        t.string :patientId
        t.string :doctorId
        t.string :reportId
        t.string :reportName
        t.string :worksheetFilepath
        t.string :patientFilepath
        t.timestamp :dueBy
        t.text :description
=end
    end
end
