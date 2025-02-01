const movies = [
    { id: 1, title: 'Movie 1', imageUrl:'../../public/Squidgame.webp'},
    { id: 2, title: 'Movie 2', imageUrl: '../../public/venom.webp' },
    { id: 3, title: 'Movie 3', imageUrl: '../../public/pushpa.webp' },
    { id: 4, title: 'Movie 4', imageUrl: '../../public/bhool.webp' },
    { id: 5, title: 'Movie 5', imageUrl: '../../public/lucky.webp' },
    { id: 6, title: 'Movie 6', imageUrl: '../../public/mismatched.webp' },
    { id: 7, title: 'Movie 7', imageUrl: '../../public/deva.webp' },
    { id: 8, title: 'Movie 8', imageUrl: '../../public/sl.webp' },
    { id: 9, title: 'Movie 9', imageUrl: '../../public/black.webp' },
    { id: 10, title: 'Movie 10', imageUrl: '../../public/amaran.webp' },
  ];

  const styles = {
    container: {
      display: 'flex',
      padding: '10px',
      gap: '15px',
      overflowX: "auto",
      marginBottom:"40px"
    },
    movieCard: {
      width: '200px',
      textAlign: 'center',
    },
    image: {
      width: '180px',
      borderRadius: '10px',
      margin:'8px 22px'
    },
    title: {
      marginTop: '8px',
      fontSize: '14px',
      fontWeight: 'bold',
    },
  };
  
  const List = () => {
    return (
        <>
        <p className="arc-text">Trending Now</p>
      <div className="overflow-auto" style={styles.container}>
        {movies.map((movie) => (
          <div key={movie.id} style={styles.movieCard}>
            <img src={movie.imageUrl} alt={movie.title} style={styles.image} />
            <p style={styles.title}>{movie.title}</p>
          </div>
        ))}
      </div>
      </>
    );
  };

  export default List

  