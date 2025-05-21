import { Component } from "react";
import toast from "react-hot-toast";
import Popup from "../popup/Popup";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      age: "",
      team: "",
      position: "",
      nationality: "",
      avatar: "",
      players: JSON.parse(localStorage.getItem("players")) || [],
      updatedPlayers: null,
      showModal: false,
      selectedPlayer: null,
    };
  }

  handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.setState({ avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.state.avatar) {
      toast.error("Please select a player image");
      return;
    }

    if (this.state.updatedPlayers) {
      let newUpdatedPlayers = {
        ...this.state.updatedPlayers,
        fullName: this.state.fullName,
        age: this.state.age,
        team: this.state.team,
        position: this.state.position,
        nationality: this.state.nationality,
        avatar: this.state.avatar,
      };
      let updatedData = this.state.players.map((player) =>
        player.id === this.state.updatedPlayers.id ? newUpdatedPlayers : player
      );
      this.setState({
        players: updatedData,
        updatedPlayers: null,
        fullName: "",
        age: "",
        team: "",
        position: "",
        nationality: "",
        avatar: "",
      });
      toast.success("Player is successfully updated !");
    } else {
      let newPlayer = {
        id: new Date().getTime(),
        fullName: this.state.fullName,
        age: this.state.age,
        team: this.state.team,
        position: this.state.position,
        nationality: this.state.nationality,
        avatar: this.state.avatar,
      };
      this.setState({
        players: [...this.state.players, newPlayer],
        fullName: "",
        age: "",
        team: "",
        position: "",
        nationality: "",
        avatar: "",
      });
      toast.success("Player is successfully added !");
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.players !== this.state.players) {
      localStorage.setItem("players", JSON.stringify(this.state.players));
    }

    if (
      !prevState.updatedPlayers &&
      prevState.updatedPlayers !== this.state.updatedPlayers
    ) {
      this.setState({
        fullName: this.state.updatedPlayers?.fullName,
        age: this.state.updatedPlayers?.age,
        team: this.state.updatedPlayers?.team,
        position: this.state.updatedPlayers?.position,
        nationality: this.state.updatedPlayers?.nationality,
        avatar: this.state.updatedPlayers?.avatar,
      });
    }
  }

  handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this player")) {
      this.setState({
        players: this.state.players.filter((val) => val.id !== id),
      });
      toast.success("Player is successfully deleted !");
    }
  };

  handleClick = (id) => {
    const findPlayer = this.state?.players.find((val) => val.id === Number(id));
    this.setState({ showModal: true, selectedPlayer: findPlayer });
  };

  render() {
    return (
      <div className="container mx-auto flex flex-col gap-10 items-center py-[60px]">
        {this.state.showModal && (
          <Popup
            player={this.state.selectedPlayer}
            onClose={() =>
              this.setState({ showModal: false, selectedPlayer: null })
            }
          />
        )}
        <div className="w-[1000px] bg-bg-primary rounded-[14px] py-[60px] flex items-center mt-20">
          <form
            action=""
            className="flex flex-wrap gap-[30px] justify-center font-[Inter] font-medium"
            onSubmit={this.handleSubmit}>
            <div className="w-[360px] flex flex-col gap-[11px]">
              <label htmlFor="fullName">FullName</label>
              <input
                className="w-full h-14 bg-[#F0F0F4] rounded-[4px] border-spacing-0.5 indent-4 focus:outline-2 focus:outline-[dodgerblue] text-[18px]"
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Enter player fullName"
                required
                value={this.state.fullName}
                onChange={(e) => this.setState({ fullName: e.target.value })}
              />
            </div>
            <div className="w-[360px] flex flex-col gap-[11px]">
              <label htmlFor="age">Age</label>
              <input
                className="w-full h-14 bg-[#F0F0F4] rounded-[4px] border-spacing-0.5 indent-4 focus:outline-2 focus:outline-[dodgerblue] "
                type="number"
                name="age"
                id="age"
                placeholder="Player age"
                required
                value={this.state.age}
                onChange={(e) => this.setState({ age: e.target.value })}
              />
            </div>
            <div className="w-[360px] flex flex-col gap-[11px]">
              <label htmlFor="team">Team</label>
              <input
                className="w-full h-14 bg-[#F0F0F4] rounded-[4px] border-spacing-0.5 indent-4 focus:outline-2 focus:outline-[dodgerblue] "
                type="text"
                placeholder="Player team"
                required
                value={this.state.team}
                onChange={(e) => this.setState({ team: e.target.value })}
              />
            </div>
            <div className="w-[360px] flex flex-col gap-[11px]">
              <label htmlFor="position">Position</label>
              <input
                className="w-full h-14 bg-[#F0F0F4] rounded-[4px] border-spacing-0.5 indent-4 focus:outline-2 focus:outline-[dodgerblue] "
                type="text"
                placeholder="Player position"
                id="position"
                name="position"
                required
                value={this.state.position}
                onChange={(e) => this.setState({ position: e.target.value })}
              />
            </div>
            <div className="w-[360px] flex flex-col gap-[11px]">
              <label htmlFor="nationality">Nationality</label>
              <input
                className="w-full h-14 bg-[#F0F0F4] rounded-[4px] border-spacing-0.5 indent-4 focus:outline-2 focus:outline-[dodgerblue] "
                type="text"
                placeholder="Player nationality"
                id="nationality"
                name="nationality"
                required
                value={this.state.nationality}
                onChange={(e) => this.setState({ nationality: e.target.value })}
              />
            </div>
            <div className="w-[360px] flex flex-col gap-[11px]">
              <label htmlFor="avatar">Avatar</label>
              <input
                className="w-full h-14 bg-[#F0F0F4] rounded-[4px] border-spacing-0.5 indent-4 focus:outline-2 focus:outline-[dodgerblue] py-4 cursor-pointer"
                type="file"
                placeholder="Player avatar"
                id="avatar"
                name="avatar"
                required
                accept="image/*"
                onChange={this.handleAvatarChange}
              />
            </div>
            <button className="w-[274px] h-14 bg-[#1C62CD] rounded-[12px] text-white cursor-pointer active:bg-blue-700 transition-all">
              <span>+ add new player</span>
            </button>
          </form>
        </div>
        <div className="w-[1140px] flex gap-5 flex-wrap pt-10 justify-center">
          {this.state.players?.map((player) => (
            <div
              key={player.id}
              className="w-[361px] bg-bg-primary rounded-[14px] py-6 px-4 flex flex-col gap-6 shadow-2xl">
              <div className="">
                <img
                  className="w-full h-[250px] mx-auto object-cover rounded-2xl cursor-pointer"
                  src={player.avatar}
                  alt={player.fullName}
                  onClick={() => this.handleClick(player.id)}
                />
              </div>
              <div className="flex flex-col gap-3 font-[Inter] font-medium text-center">
                <h3 className="line-clamp-1 text-2xl">{player.fullName}</h3>
                <div className="flex justify-center gap-3 pt-5 text-white text-[20px] font-medium font-[Inter]">
                  <button
                    onClick={() => this.setState({ updatedPlayers: player })}
                    className="w-[200px] h-[50px] bg-[green] rounded cursor-pointer">
                    update
                  </button>
                  <button
                    onClick={() => this.handleDelete(player.id)}
                    className="w-[200px] h-[50px] bg-[dodgerblue] rounded cursor-pointer">
                    delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
