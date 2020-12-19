class Api::AlbumsController < ApplicationController
    def index
        @albums = Album.all
        # @albums = Album.find_by(user_id: params[:user_id])
        render :index
    end

    def show
        @album = Album.find_by(id: params[:id])
        render :show
    end

    def create
        @album = Album.new({ name: album_params[:name], description: album_params[:description] })
        @album.user_id = current_user.id
        photo_ids = album_params[:photo_ids].map(&:to_i)
        if !photo_ids.nil? && photo_ids.length > 0 && @album.save!
            photo_ids.each do |photo_id|
                PhotoAlbumLink.create({ photo_id: photo_id, album_id: @album.id })
            end
            render :show
        else
            render json: @album.errors.full_messages, status: 422
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