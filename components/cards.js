import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiPlayFill } from "react-icons/ri";

const FirstCard = () => {
  return (
    <Link
      href="#"
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045822509620138066/image.png"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
        <button className="p-3 text-3xl bg-main-green rounded-full text-gray absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-out">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">Today&#39;s Top Hits</h5>
        <p className="text-gray-400 text-sm w-[18ch]">
          Taylor Swift is on top of the Hottest 50!
        </p>
      </div>
    </Link>
  );
};

const SecondCard = () => {
  return (
    <Link
      href="#"
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045822562543861760/image.png"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
        <button className="p-3 text-3xl bg-main-green rounded-full text-gray absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-out">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">RapCaviar</h5>
        <p className="text-gray-400 text-sm w-[18ch]">
          Music from Drake, 21 Savage, Lil Uzi Vert and more.
        </p>
      </div>
    </Link>
  );
};

const ThirdCard = () => {
  return (
    <Link
      href="#"
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045822644630593576/image.png"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
        <button className="p-3 text-3xl bg-main-green rounded-full text-gray absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-out">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">All Out 2010s</h5>
        <p className="text-gray-400 text-sm w-[18ch]">
          The biggest songs of the 2010s.
        </p>
      </div>
    </Link>
  );
};

const FourthCard = () => {
  return (
    <Link
      href="#"
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045845888255410226/image.png"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
        <button className="p-3 text-3xl bg-main-green rounded-full text-gray absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-out">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">Rock Classics</h5>
        <p className="text-gray-400 text-sm w-[18ch]">
          Rock legends & epic songs that continue to inspire generations. Cover:
          Guns N&#39; Roses
        </p>
      </div>
    </Link>
  );
};

const FifthCard = () => {
  return (
    <Link
      href="#"
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045822793092169759/image.png"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
        <button className="p-3 text-3xl bg-main-green rounded-full text-gray absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-out">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">Sleep</h5>
        <p className="text-gray-400 text-sm w-[18ch]">
          Gentle ambient piano to help you fall asleep.
        </p>
      </div>
    </Link>
  );
};

const SixthCard = () => {
  return (
    <Link
      href="#"
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045822846997368912/image.png"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
        <button className="p-3 text-3xl bg-main-green rounded-full text-gray absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-out">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">DayDreamer</h5>
        <p className="text-gray-400 text-sm w-[18ch]">
          Drift away with enthralling instrumentals.
        </p>
      </div>
    </Link>
  );
};

const SeventhCard = () => {
  return (
    <Link
      href="#"
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045823483445268550/image.png"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
        <button className="p-3 text-3xl bg-main-green rounded-full text-gray absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-out">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">Peaceful Piano</h5>
        <p className="text-gray-400 text-sm w-[18ch]">
          Relax and indulge with beautiful piano pieces
        </p>
      </div>
    </Link>
  );
};

const EighthCard = () => {
  return (
    <Link
      href="#"
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045823483747250237/image.png"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
        <button className="p-3 text-3xl bg-main-green rounded-full text-gray absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-out">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">Deep Focus</h5>
        <p className="text-gray-400 text-sm w-[18ch]">
          Keep calm and focus with ambient and post-rock music.
        </p>
      </div>
    </Link>
  );
};

const NinthCard = () => {
  return (
    <Link
      href="#"
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045849052371243039/image.png"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
        <button className="p-3 text-3xl bg-main-green rounded-full text-gray absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-out">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">Instrumental Study</h5>
        <p className="text-gray-400 text-sm w-[18ch]">
          Focus with soft study music in the background.
        </p>
      </div>
    </Link>
  );
};

const TenthCard = () => {
  return (
    <Link
      href="#"
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045849102044364861/image.png"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
        <button className="p-3 text-3xl bg-main-green rounded-full text-gray absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-out">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">
          chill lofi study beats
        </h5>
        <p className="text-gray-400 text-sm w-[18ch]">
          The perfect study beats. Find your focus, crush your productivity.
        </p>
      </div>
    </Link>
  );
};

const EleventhCard = () => {
  return (
    <Link
      href="#"
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045823484070203422/image.png"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
        <button className="p-3 text-3xl bg-main-green rounded-full text-gray absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-out">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">Mood Booster</h5>
        <p className="text-gray-400 text-sm w-[18ch]">
          Get happy with today&#39;s dose of feel-good songs!
        </p>
      </div>
    </Link>
  );
};

const TwelfthCard = () => {
  return (
    <Link
      href="#"
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045823484397375619/image.png"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
        <button className="p-3 text-3xl bg-main-green rounded-full text-gray absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-out">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">Feelin&#39; Good</h5>
        <p className="text-gray-400 text-sm w-[18ch]">
          Feel good with this positively timeless playlist!
        </p>
      </div>
    </Link>
  );
};

const ThirteenthCard = () => {
  return (
    <Link
      href="#"
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045823484707745802/image.png"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
        <button className="p-3 text-3xl bg-main-green rounded-full text-gray absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-out">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">Dark & Stormy</h5>
        <p className="text-gray-400 text-sm w-[18ch]">
          Beautifully dark, dramatic tracks.
        </p>
      </div>
    </Link>
  );
};

const FourteenthCard = () => {
  return (
    <Link
      href="#"
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045868770176008293/image.png"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
        <button className="p-3 text-3xl bg-main-green rounded-full text-gray absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-out">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">Feel Good Piano</h5>
        <p className="text-gray-400 text-sm w-[18ch]">
          Happy vibes for an upbeat morning.
        </p>
      </div>
    </Link>
  );
};

const FifteenthCard = () => {
  return (
    <Link
      href="#"
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045823485106196531/image.png"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
        <button className="p-3 text-3xl bg-main-green rounded-full text-gray absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-out">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">Start Nowhere</h5>
        <p className="text-gray-400 text-sm w-[18ch]">Sam Hunt</p>
      </div>
    </Link>
  );
};

const SixteenthCard = () => {
  return (
    <Link
      href="#"
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045823485563383839/image.png"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
        <button className="p-3 text-3xl bg-main-green rounded-full text-gray absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-out">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">This Is What I Mean</h5>
        <p className="text-gray-400 text-sm w-[18ch]">Stormzy</p>
      </div>
    </Link>
  );
};

const SeventeenthCard = () => {
  return (
    <Link
      href="#"
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045823485945057412/image.png"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
        <button className="p-3 text-3xl bg-main-green rounded-full text-gray absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-out">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">Love Sux (Deluxe)</h5>
        <p className="text-gray-400 text-sm w-[18ch]">Avril Lavigne</p>
      </div>
    </Link>
  );
};

const EighteenthCard = () => {
  return (
    <Link
      href="#"
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="https://cdn.discordapp.com/attachments/1043267593441656924/1045871840041644062/image.png"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
        />
        <button className="p-3 text-3xl bg-main-green rounded-full text-gray absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-out">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">
          Dreamers [Music from the FIFA World Cup Qatar 2022 Official
          Soundtrack]
        </h5>
        <p className="text-gray-400 text-sm w-[18ch]">Jung Kook, BTS</p>
      </div>
    </Link>
  );
};

export {
  FirstCard,
  SecondCard,
  ThirdCard,
  FourthCard,
  FifthCard,
  SixthCard,
  SeventhCard,
  EighthCard,
  NinthCard,
  TenthCard,
  EleventhCard,
  TwelfthCard,
  ThirteenthCard,
  FourteenthCard,
  FifteenthCard,
  SixteenthCard,
  SeventeenthCard,
  EighteenthCard,
};
