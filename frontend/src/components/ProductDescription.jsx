import React from "react";

const ProductDescription = () => {
  return (
    <div className="mt-20 ">
      <div className="flex gap-3 mb-4 ">
        <button className="btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36">
          Description
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Care Guide
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Size Guide
        </button>
      </div>
      <div className="flex flex-col pb-16">
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem hic,
          omnis architecto repudiandae possimus nihil harum laborum voluptate
          sit repellendus libero ullam soluta assumenda sapiente ducimus
          repellat. Quas velit natus, aliquam deserunt tempore veritatis alias
          reprehenderit odio, quod expedita sint, nihil ex! Sed labore voluptas
          architecto sequi quibusdam dolores laborum mollitia nihil, ad quia
          repellat?
        </p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
          rem velit illo, ducimus, dicta asperiores neque ut vitae mollitia vel
          nesciunt fugit amet in consectetur quaerat non adipisci?
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
