class Api::PhotosController < ApplicationController
    def index
        @photos = Photo.all
        render :index
    end

    def show
        @photo = photos.find_by(id: params[:id])
        render :show
    end

    def create
        @photo = Photo.new(photo_params)
        # @photo[:id] = current_user.id
        if @photo.save!
            render :show
        else
            render json: photo.errors.full_messages, status: 422
        end
    end

    def update
        @photo = Post.find_by(id: params[:id])
        if @photo.update(post_params)
            render :show
        else
            render json: photo.errors.full_messages, status: 422
        end
    end

    def delete
        @photo = Photo.find_by(id: params[:id])
        @photo.destroy
    end

    private
    def photo_params
        params.require(:photo).permit(:user_id, :description)
    end
end