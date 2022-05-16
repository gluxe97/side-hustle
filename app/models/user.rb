class User < ApplicationRecord
    #macros-associations/relationships

    #activates Bcrypt for our password_digest
    has_secure_password 

    #class methods
    #instance methods
end
