import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

class AlbumShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAlbum(this.props.match.params.albumId);
    }

    render() {
        const { album, currentUser } = this.props;
        // let backLink;
        // let backLinkText;

        if (album) {
            // debugger;
            const style = {
                backgroundImage: 'url(' + album.photos[0].photoUrl + ')'
            }

            return (
                <div className="album-container">
                    <div className="album-show-toolbar">
                        <Link to={`/photos/${album.user_id}/albums`}><BiArrowBack />Back to albums list</Link>
                    </div>
                    <div className="album-info" style={style}>
                        <div className="dim">
                            <div className="album-info-head">
                                <h3>{album.name}</h3>
                                <p>{album.description}</p>
                            </div>
                            <Link to={`/albums/${album.user_id}`}>{this.props.users[album.user_id].fname} {this.props.users[album.user_id].lname}</Link>
                        </div>
                    </div>
                    <div className="album-photos">
                        <p>Hi</p>
                    </div>
                </div>
            );
        } else {
            return (
                <p>Loading album...</p>
            );
        }
    }
}

export default AlbumShow;