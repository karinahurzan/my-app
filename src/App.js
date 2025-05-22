import logo from './logo.svg';
import './App.css';
import Accordion from './components/accordion';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreButton from './components/load-more-button';

function App() {
  return (
    <div className="App">
      <Accordion />
      <RandomColor />
      <StarRating numberOfStars={10} />
      <ImageSlider
        url={'https://picsum.photos/v2/list'}
        page={'1'}
        limit={'10'}
      />
      <LoadMoreButton />
    </div>
  );
}

export default App;
