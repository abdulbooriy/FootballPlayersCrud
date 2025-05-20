import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="container mx-auto flex justify-center py-[60px]">
        <div className="w-[1140px] bg-bg-primary rounded-[14px] py-[60px] px-[180px] flex items-center">
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
              />
            </div>
            <div className="w-[360px] flex flex-col gap-[11px]">
              <label htmlFor="team">Team</label>
              <input
                className="w-full h-14 bg-[#F0F0F4] rounded-[4px] border-spacing-0.5 indent-4 focus:outline-2 focus:outline-[dodgerblue] "
                type="text"
                placeholder="Player team"
                required
              />
            </div>
            <div className="w-[360px] flex flex-col gap-[11px]">
              <label htmlFor="name">Name</label>
              <input
                className="w-full h-14 bg-[#F0F0F4] rounded-[4px] border-spacing-0.5 indent-4 focus:outline-2 focus:outline-[dodgerblue] "
                type="text"
                placeholder=""
              />
            </div>
            <div className="w-[360px] flex flex-col gap-[11px]">
              <label htmlFor="name">Name</label>
              <input
                className="w-full h-14 bg-[#F0F0F4] rounded-[4px] border-spacing-0.5 indent-4 focus:outline-2 focus:outline-[dodgerblue] "
                type="text"
                placeholder=""
              />
            </div>
            <div className="w-[360px] flex flex-col gap-[11px]">
              <label htmlFor="name">Name</label>
              <input
                className="w-full h-14 bg-[#F0F0F4] rounded-[4px] border-spacing-0.5 indent-4 focus:outline-2 focus:outline-[dodgerblue] "
                type="text"
                placeholder=""
              />
            </div>
            <button className="w-[274px] h-14 bg-[#1C62CD] rounded-[12px] text-white cursor-pointer active:bg-blue-700 transition-all">
              <span>+ add new player</span>
            </button>
          </form>
        </div>
      </div>
    );
  }
}
