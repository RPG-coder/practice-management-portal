class LabReport < ApplicationRecord
    self.primary_keys = [:patientId, :doctorId, :reportId]
end
