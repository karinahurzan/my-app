import logo from './logo.svg';
import './App.css';
import Accordion from './components/accordion';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreButton from './components/load-more-button';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';
import QRCodeGenerator from './components/qr-code-generator';
import LightDarkTheme from './components/light-dark-theme'
import ScrollIndicator from './components/scroll-indicator';
import TabTest from './components/custom-tabs/tab-test';
import ModalTest from './components/custom-modal-popup/modal-test';
import GithubProfileFinder from './components/github-profile-finder';
import SearchAutocomplete from './components/search-autocomplete-with-api';
import TicTacToe from './components/tic-tac-toe';

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
      <TreeView menus={menus} />
      <QRCodeGenerator />
      <LightDarkTheme />
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
      <TabTest />
      <ModalTest />
      <GithubProfileFinder />
      <SearchAutocomplete />
      <TicTacToe />
    </div>
  );
}

export default App;
