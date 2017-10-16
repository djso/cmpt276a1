class Enroll < ActiveRecord::Base
	has_many :students
	belongs_to :courses
end
