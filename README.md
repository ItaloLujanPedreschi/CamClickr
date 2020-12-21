# CamClickr
![CamClickr Banner](https://github.com/ItaloLujanPedreschi/CamClickr/blob/master/app/assets/images/github-visuals/welcome_page.png)
<div align="center">
  <a href="https://cam-clickr.herokuapp.com/#/" target="_blank">Live Site</a>
</div>

CamClickr is a Flickr inspired clone, meant to replicate its image hosting features and capabilities.

# Technologies Stack

* Ruby on Rails - REST architecture allowed for efficient API endpoints, Integrated PostgreSQL support
* React/Redux - Redux state is normalized to allow for access to any necessary information at any location in the web application
* PostgreSQL
* AWS S3/Rails Active Storage - Allowed for cloud based file hosting
* SCSS - Syntactic styling
* Heroku - Simple hosting

# Functionality and MVP

* Ability to create accounts with secure authentication through BCrypt
* Users can view photo spreads, upload multiple images, edit on the photo pages, and delete photos
* Photos are stored in cloud storage using AWS S3
* Users can create albums from their own images
* Users can comment on images, comments can be deleted by the comment owner or photo owner
* Tags can be added or removed from images by image owner

# Features

## Photo Spread

The image spread is present on the explore, user photos, and album pages. Each row maintains a uniform width allowing for a seamless array of pictures that can be viewed left to right.

![Photo Index Demo](https://github.com/ItaloLujanPedreschi/CamClickr/blob/master/app/assets/images/github-visuals/photo_index_demo.png)
