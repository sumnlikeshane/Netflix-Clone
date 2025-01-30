const movies = [
    { id: 1, title: 'Movie 1', imageUrl:''},
    { id: 2, title: 'Movie 2', imageUrl: 'https://via.placeholder.com/200x300' },
    { id: 3, title: 'Movie 3', imageUrl: 'https://via.placeholder.com/200x300' },
    { id: 4, title: 'Movie 4', imageUrl: 'https://via.placeholder.com/200x300' },
    { id: 5, title: 'Movie 5', imageUrl: 'https://via.placeholder.com/200x300' },
    { id: 6, title: 'Movie 6', imageUrl: 'https://via.placeholder.com/200x300' },
    { id: 7, title: 'Movie 7', imageUrl: 'https://via.placeholder.com/200x300' },
    { id: 8, title: 'Movie 8', imageUrl: 'https://via.placeholder.com/200x300' },
    { id: 9, title: 'Movie 9', imageUrl: 'https://via.placeholder.com/200x300' },
    { id: 10, title: 'Movie 10', imageUrl: 'https://via.placeholder.com/200x300' },
  ];

  const styles = {
    container: {
      display: 'flex',
      overflowX: 'scroll',
      padding: '10px',
      gap: '10px',
    },
    movieCard: {
      width: '200px',
      textAlign: 'center',
    },
    image: {
      width: '180px',
      borderRadius: '10px',
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
      <div style={styles.container}>
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

  