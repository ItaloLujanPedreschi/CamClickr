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

## Photo Upload

Multiple images can be uploaded at once for a more rapid user upload experience. They can be individually edited to have different titles and descriptions all within the upload form.

![Photo Upload](https://github.com/ItaloLujanPedreschi/CamClickr/blob/master/app/assets/images/github-visuals/photo_upload.png)

## Album Create

The creation of an album required the ability to select and deselect images and for those images' styling to differ based on their state. The state included a photo_ids array to which the IDs of selected photos are added and deselected photos are removed. A conditional is used for this function. Vanilla DOM manipulation is used to add the "selected-for-album" class to the clicked image giving it the selected styling.
### Photo Selection
```
constructor(props) {
    super(props);
    this.state = {
        name: "new album",
        description: "",
        photo_ids: []
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePhotoClick = this.handlePhotoClick.bind(this);
}

handlePhotoClick(e) {
    let photoId = parseInt(e.currentTarget.id);
    let checkPhotoAlreadySelected = this.state.photo_ids.indexOf(photoId);
    let new_photo_ids = Array.from(this.state.photo_ids);
    if (checkPhotoAlreadySelected === -1) {
        e.currentTarget.classList.add("selected-for-album");
        new_photo_ids.push(photoId);
        this.setState({ photo_ids: new_photo_ids });
    } else {
        e.currentTarget.classList.remove("selected-for-album");
        new_photo_ids.splice(checkPhotoAlreadySelected, 1);
        this.setState({ photo_ids: new_photo_ids });
    }
}
```
