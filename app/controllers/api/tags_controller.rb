class Api::TagsController < ApplicationController
    def index
        @tags = Tag.all
        render :index
    end

    def show
        @tag = Tag.find_by(id: params[:id])
        render :show
    end

    def create
        @tag = Tag.new(tag_params)
        if @tag.save!
            render :show
        else
            render json: @tag.errors.full_messages, status: 422
        end
    end

    def destroy
        @tag = Tag.find_by(id: params[:id])
        @tag.destroy
    end

    private
    def tag_params
        params.require(:tag).permit(:photo_id, :name)
    end
end