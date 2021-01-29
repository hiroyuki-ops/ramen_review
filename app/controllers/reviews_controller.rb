class ReviewsController < ApplicationController
  def index
  end

  def create
  	@raview = Review.new(review_params)
  	@review.user_id = current_user.user_id
  	if @review.save
  		redirect_to ramen_shop_reviews_path(@review.ramen_shop)
  	else
  		@ramen_shop = RamenShop.find(params[:id])
  		render "ramen_shops/show"
  end

  private
  def review_params
  	params.require(:review).permit(:ramen_shop_id, :score, :content)
  end
end
