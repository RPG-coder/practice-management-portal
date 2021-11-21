class Medication < ApplicationRecord
    self.primary_keys = [:patientId, :doctorId, :medicationId]
end
