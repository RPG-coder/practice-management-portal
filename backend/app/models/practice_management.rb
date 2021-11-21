class PracticeManagement < ApplicationRecord
    self.primary_keys = [:patientId, :doctorId]
end
