import Button from '@mui/material/Button';

function SongCard({imgSrc, title, artists, releasedate, album, Selected, handleSelect, uri}) {
    return (
        <div className="cardsong">
            <div className="searchcard">
                <img src={imgSrc} alt="" />
                <div className="titlesong">
                    <h2>{title}</h2>
                    <h3>{album}</h3>
                    <h2> {artists.map((artist) => artist.name).join(', ')}</h2>
                    <h2> {releasedate}</h2>
                    <Button onClick={() => handleSelect(uri)}> {Selected ? 'Delete' : 'Select'} </Button>
                </div>
            </div>
        </div>
    );
}

export default SongCard;