import * as TagAPIUtil from './../util/tag_api_util';

export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const RECEIVE_TAG = "RECEIVE_TAG";
export const RECEIVE_TAG_ERRORS = "RECEIVE_TAG_ERRORS";
export const REMOVE_TAG = "REMOVE_TAG";

const receiveTags = tags => ({
    type: RECEIVE_TAGS,
    tags
});

const receiveTag = tag => ({
    type: RECEIVE_TAG,
    tag
});

const receiveTagErrors = errors => ({
    type: RECEIVE_TAG_ERRORS,
    errors
});

const removeTag = tagId => ({
    type: REMOVE_TAG,
    tagId
})

export const getTags = () => dispatch => TagAPIUtil.getTags()
    .then(tags => dispatch(receiveTags(tags)));

export const getTag = id => dispatch => TagAPIUtil.getTag(id)
    .then(tag => dispatch(receiveTag(tag)));

export const postTag = tagForm => dispatch => TagAPIUtil.postTag(tagForm)
    .then(tags => dispatch(receiveTags([tags])),
        errors => dispatch(receiveTagErrors(errors.responseJSON)))
;

export const deleteTag = tagId => dispatch => TagAPIUtil.deleteTag(tagId)
    .then(() => dispatch(removeTag(tagId)));