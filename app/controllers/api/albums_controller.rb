class Api::AlbumsController < ApplicationController
    def index
        @albums = Album.find_by(user_id: params[:id])
        render :index
    end

    def show
        @album = Album.find_by(id: params[:id])
        render :show
    end

    def create
        @album = Album.new(params.require(:album).permit(:name, :description))
        @album.user_id = current_user.id

        photo_ids = params[:photo_ids]

        if !photo_ids.nil? && photo_ids.length > 0 && @album.save!
            render :show
        else
            render json: @photo.errors.full_messages, status: 422
        end
    end

    def update
        @album = Post.find_by(id: params[:id])
        if @album.update(album_params)
            render :show
        else
            render json: album.errors.full_messages, status: 422
        end
    end

    def destroy
        @album = album.find_by(id: params[:id])
        @album.destroy
    end

    private
    def album_params
        params.require(:album).permit(:name, :description, photo_ids: [])
    end
end