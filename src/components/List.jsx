const movies = [
  { id: 1, imageUrl: '../../public/Squidgame.webp' },
  { id: 2, imageUrl: '../../public/venom.webp' },
  { id: 3, imageUrl: '../../public/pushpa.webp' },
  { id: 4, imageUrl: '../../public/bhool.webp' },
  { id: 5, imageUrl: '../../public/lucky.webp' },
  { id: 6, imageUrl: '../../public/mismatched.webp' },
  { id: 7, imageUrl: '../../public/deva.webp' },
  { id: 8, imageUrl: '../../public/sl.webp' },
  { id: 9, imageUrl: '../../public/black.webp' },
  { id: 10, imageUrl: '../../public/amaran.webp' },
];

const styles = {
  container: {
    display: 'flex',
    padding: '10px',
    gap: '15px',
    overflowX: 'hidden',
    marginBottom: '40px',
  },
  movieCard: {
    position: 'relative',
    width: '200px',
    textAlign: 'center',
  },
  image: {
    width: '180px',
    borderRadius: '10px',
    margin: '8px 22px',
  },
  cardNumber:(number)=>( {
    position: 'absolute', 
    top: '185px',
    left: number === 10 ? '40px' : `${12 - length * 10}px`,
    background: 'none', 
    fontSize: '6.5rem',
    fontWeight: '800',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black', 
    textShadow: `
      -1px -1px 0 white, /* Outline: top-left */
      1px -1px 0 white, /* Outline: top-right */
      -1px 1px 0 white, /* Outline: bottom-left */
      1px 1px 0 white   /* Outline: bottom-right */
    `,
  }),
};

const List = () => {
  return (
    <>
      <p className="arc-text">Trending Now</p>
      <div className="overflow-auto" style={styles.container}>
        {movies.map((movie, index) => {
          const number = index + 1;
          return (
            <div key={movie.id} style={styles.movieCard}>
              <div style={styles.cardNumber(number)}>{number}</div>
              <img src={movie.imageUrl} alt={movie.title} style={styles.image} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default List;

  