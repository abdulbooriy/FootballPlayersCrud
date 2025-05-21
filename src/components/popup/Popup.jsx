import { Component } from "react";

export default class Popup extends Component {
  render() {
    const { player, onClose } = this.props;

    if (!player) return null;

    return (
      <div className="fixed top-0 left-0 w-full h-full bg-gray-300 opacity-100 flex items-center justify-center z-50 cursor-pointer" onClick={onClose}>
        <div className="bg-white rounded-[14px] w-[361px] relative py-5 px-5">
          <button
            onClick={onClose}
            className="absolute top-1 right-4 transition 5.s hover:bg-gray-300 w-10 h-10 text-center rounded-full text-2xl font-bold cursor-pointer">
            ×
          </button>
          <img
            src={player.avatar}
            alt={player.fullName}
            className="w-full h-[200px] object-cover rounded-[14px] mb-4 mt-7"
          />
          <div className="font-[Inter]">
            <h2 className="text-2xl font-bold mb-4">{player.fullName}</h2>
            <p>
              <strong>Age:</strong> {player.age}
            </p>
            <p>
              <strong>Team:</strong> {player.team}
            </p>
            <p>
              <strong>Position:</strong> {player.position}
            </p>
            <p>
              <strong>Nationality:</strong> {player.nationality}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
