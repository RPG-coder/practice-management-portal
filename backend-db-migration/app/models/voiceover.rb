class Voiceover < ApplicationRecord
    self.primary_keys = [:patientId, :doctorId, :documentId]
end
