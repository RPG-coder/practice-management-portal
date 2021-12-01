class LabReportsController < ApplicationController
    def initialize
        self.list
    end

    def list
        @reports = LabReport.all
    end
    
    def show
        @LabReport.where(reportid: params[:reportId], patientId: params[:reportId], doctorId: params[:reportId])
    end
    
    def create
        @LabReport.new
    end
    
    def edit
    end
    
    def update
    end
    
    def delete
    end
end
