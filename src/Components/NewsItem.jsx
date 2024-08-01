import image from '../assets/OIP.jpg'

function NewsItem( { title, src, url, description } ) {

    return (
        <>
            <div className="card bg-dark text-light mb-3 d-inline-block my-5 mx-3 py-3 px-3" style={{maxWidth: "345px"}}>
                <img src={src ? src : image} className="card-img-top" alt="gambar berita" />
                <div className="card-body">
                    <h5 className="card-title">{title.slice(0, 50)}</h5>
                    <p className="card-text">{ description ? description.slice(0, 90) : "News Event" }</p>
                    <a href={url} className="btn btn-primary">Read more news</a>
                </div>
            </div>
        </>
    )

}

export default NewsItem