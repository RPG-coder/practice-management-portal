class Document < ApplicationRecord
    self.primary_keys = [:patientId, :doctorId, :documentId]
end
