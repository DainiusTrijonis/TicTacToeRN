/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('<App rendering />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('has 6 child when gameType is 3 tiles', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(6);
  });
});
describe('<GameLogic />', () => {

  describe('<GameLogic of GameType 3 tiles />', () => {
    let AppData = renderer.create(<App />).getInstance();
    AppData.setGameMode(3);
    it('Get a win on diagonal with player 1', () => {
      var arr =
      [
        [1, 0, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ]
      AppData.setState({gameState:arr});
      var winner = AppData.getWinner();
      expect(winner).toEqual(1);
    });
    it('Get a win on diagonal with player 2', () => {
      var arr =
      [
        [-1, 0, 0, 0, 0],
        [0, -1, 0, 0, 0],
        [0, 0, -1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ]
      AppData.setState({gameState:arr});
      var winner = AppData.getWinner();
      expect(winner).toEqual(-1);
    });
    it('Get a win on Column with player 1', () => {
        var arr =
        [
          [1, 0, 0, 0, 0],
          [1, 0, 0, 0, 0],
          [1, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0]
        ]
        AppData.setState({gameState:arr});
        var winner = AppData.getWinner();
        expect(winner).toEqual(1);
      });
      it('Get a win on Column with player 2', () => {
        var arr =
        [
          [-1, 0, 0, 0, 0],
          [-1, 0, 0, 0, 0],
          [-1, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0]
        ]
        AppData.setState({gameState:arr});
        var winner = AppData.getWinner();
        expect(winner).toEqual(-1);
      });
      it('Get a win on Line with player 1', () => {
        var arr =
        [
          [1, 1, 1, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0]
        ]
        AppData.setState({gameState:arr});
        var winner = AppData.getWinner();
        expect(winner).toEqual(1);
      });
      it('Get a win on Line with player 1', () => {
        var arr =
        [
          [-1, -1, -1, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0]
        ]
        AppData.setState({gameState:arr});
        var winner = AppData.getWinner();
        expect(winner).toEqual(-1);
      });
  });
  describe('<GameLogic of GameType 4 tiles />', () => {
    let AppData = renderer.create(<App />).getInstance();
    AppData.setGameMode(4);
    it('Get a win on diagonal with player 1', () => {
      var arr =
      [
        [1, 0, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0]
      ]
      AppData.setState({gameState:arr});
      var winner = AppData.getWinner();
      expect(winner).toEqual(1);
    });
    it('Get a win on diagonal with player 2', () => {
      var arr =
      [
        [-1, 0, 0, 0, 0],
        [0, -1, 0, 0, 0],
        [0, 0, -1, 0, 0],
        [0, 0, 0, -1, 0],
        [0, 0, 0, 0, 0]
      ]
      AppData.setState({gameState:arr});
      var winner = AppData.getWinner();
      expect(winner).toEqual(-1);
    });
    it('Get a win on Column with player 1', () => {
        var arr =
        [
          [1, 0, 0, 0, 0],
          [1, 0, 0, 0, 0],
          [1, 0, 0, 0, 0],
          [1, 0, 0, 0, 0],
          [0, 0, 0, 0, 0]
        ]
        AppData.setState({gameState:arr});
        var winner = AppData.getWinner();
        expect(winner).toEqual(1);
      });
      it('Get a win on Column with player 2', () => {
        var arr =
        [
          [-1, 0, 0, 0, 0],
          [-1, 0, 0, 0, 0],
          [-1, 0, 0, 0, 0],
          [-1, 0, 0, 0, 0],
          [0, 0, 0, 0, 0]
        ]
        AppData.setState({gameState:arr});
        var winner = AppData.getWinner();
        expect(winner).toEqual(-1);
      });
      it('Get a win on Line with player 1', () => {
        var arr =
        [
          [1, 1, 1, 1, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0]
        ]
        AppData.setState({gameState:arr});
        var winner = AppData.getWinner();
        expect(winner).toEqual(1);
      });
      it('Get a win on Line with player 2', () => {
        var arr =
        [
          [-1, -1, -1, -1, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0]
        ]
        AppData.setState({gameState:arr});
        var winner = AppData.getWinner();
        expect(winner).toEqual(-1);
      });
  });
  describe('<GameLogic of GameType 5 tiles />', () => {
    let AppData = renderer.create(<App />).getInstance();
    AppData.setGameMode(5);
    it('Get a win on diagonal with player 1', () => {
      var arr =
      [
        [1, 0, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1]
      ]
      AppData.setState({gameState:arr});
      var winner = AppData.getWinner();
      expect(winner).toEqual(1);
    });
    it('Get a win on diagonal with player 2', () => {
      var arr =
      [
        [-1, 0, 0, 0, 0],
        [0, -1, 0, 0, 0],
        [0, 0, -1, 0, 0],
        [0, 0, 0, -1, 0],
        [0, 0, 0, 0, -1]
      ]
      AppData.setState({gameState:arr});
      var winner = AppData.getWinner();
      expect(winner).toEqual(-1);
    });
    it('Get a win on Column with player 1', () => {
        var arr =
        [
          [1, 0, 0, 0, 0],
          [1, 0, 0, 0, 0],
          [1, 0, 0, 0, 0],
          [1, 0, 0, 0, 0],
          [1, 0, 0, 0, 0]
        ]
        AppData.setState({gameState:arr});
        var winner = AppData.getWinner();
        expect(winner).toEqual(1);
      });
      it('Get a win on Column with player 2', () => {
        var arr =
        [
          [-1, 0, 0, 0, 0],
          [-1, 0, 0, 0, 0],
          [-1, 0, 0, 0, 0],
          [-1, 0, 0, 0, 0],
          [-1, 0, 0, 0, 0]
        ]
        AppData.setState({gameState:arr});
        var winner = AppData.getWinner();
        expect(winner).toEqual(-1);
      });
      it('Get a win on Line with player 1', () => {
        var arr =
        [
          [1, 1, 1, 1, 1],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0]
        ]
        AppData.setState({gameState:arr});
        var winner = AppData.getWinner();
        expect(winner).toEqual(1);
      });
      it('Get a win on Line with player 2', () => {
        var arr =
        [
          [-1, -1, -1, -1, -1],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0]
        ]
        AppData.setState({gameState:arr});
        var winner = AppData.getWinner();
        expect(winner).toEqual(-1);
      });
  });
  describe('<Gamelogic other functions />', () => {
    let AppData = renderer.create(<App />).getInstance();
    it('random starting player not to be 0', () => {

      var startingPlayer = AppData.getStartingPlayer();
      expect(startingPlayer).not.toBe(0);
    });
    it('Check if initializing clears game array ', () => {
      var changedArray =
      [
        [1, 0, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1]
      ]
      var clearArray =
      [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ]
      AppData.setState({gameState:changedArray});

      AppData.initializeGame();

      expect(AppData.state.gameState).toEqual(clearArray);
    });
  });
});

