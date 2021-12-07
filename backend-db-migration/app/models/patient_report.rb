class PatientReport < ApplicationRecord
    self.primary_keys = [:patientId, :reportId]
end
