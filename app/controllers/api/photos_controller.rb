class Api::PhotosController < ApplicationController
    def index
        @photos = Photo.all
        render :index
    end

    def show
        @photo = Photo.with_attached_image.find_by(id: params[:id])
        render :show
    end

    def create
        @photo = Photo.new(params.require(:photo).permit(:image, :title, :description))
        @photo.user_id = current_user.id
        if @photo.save
            render :show
        else
            render json: @photo.errors.full_messages, status: 422
        end
    end

    def update
        @photo = Photo.find_by(id: params[:id])
        if @photo.update(params.require(:photo).permit(:image, :title, :description))
            render :show
        else
            render json: photo.errors.full_messages, status: 422
        end
    end

    def destroy
        @photo = Photo.find_by(id: params[:id])
        @photo.destroy
    end

    private
    def photo_params
        params.require(:photo).permit(:image, :title, :description)
    end
end