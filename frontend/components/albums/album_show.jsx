import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

class PhotoShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAlbum(this.props.match.params.albumId);
    }

    render() {
        const { album, currentUser } = this.props;
        let backLink;
        let backLinkText;

        if (album) {
            return (
                <div className="album-container">
                    <div className="album-show">
                        <div className="album">
                            <img src={album.albumUrl} alt={album.description} />
                        </div>
                        <Link to={`/photos/${album.user_id}`}><BiArrowBack />Back to albums list</Link>
                    </div>
                    <div className="album-info">
                        <Link to={`/albums/${album.user_id}`}>{this.props.users[album.user_id].fname} {this.props.users[album.user_id].lname}</Link>
                        <h3>{album.title}</h3>
                        <p>{album.description}</p>
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

export default PhotoShow;