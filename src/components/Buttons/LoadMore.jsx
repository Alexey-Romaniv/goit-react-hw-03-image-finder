import s from '../../styles.module.css';

export const LoadMore = ({ handleNextPage }) => {
  return (
    <button className={s.Button} onClick={handleNextPage} type="button">
      Load More
    </button>
  );
};
