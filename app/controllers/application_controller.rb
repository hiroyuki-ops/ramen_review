class ApplicationController < ActionController::Base
	before_action :configure_permitted_paramaters, if: :devise_controller?

	protecgted
	def configure_permitted_paramaters
		devise_paramater_sanitizer.permit(:sign_up keys: [:username])
	end
end
