function BackgroundGlow({ position = "left" }) {
  const glowPosition = {
    left: "-left-40 top-20",
    right: "-right-40 top-20",
    center: "left-1/2 -translate-x-1/2 top-10",
    bottom: "left-1/2 -translate-x-1/2 bottom-0",
  };

  return (
    <>
      <div
        className={`absolute ${glowPosition[position]} w-[500px] h-[500px]
        bg-blue-500/10 rounded-full blur-[150px]`}
      ></div>

      <div
        className={`absolute ${position === "left" ? "right-10 bottom-10" : "left-10 bottom-10"}
        w-[300px] h-[300px]
        bg-cyan-500/10 rounded-full blur-[120px]`}
      ></div>
    </>
  );
}

export default BackgroundGlow;