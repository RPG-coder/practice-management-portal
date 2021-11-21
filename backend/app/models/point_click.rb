class PointClick < ApplicationRecord
    self.primary_keys = [:patientId, :doctorId, :documentId]
end
