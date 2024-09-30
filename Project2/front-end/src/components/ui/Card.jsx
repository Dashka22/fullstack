import { DeleteButton, EditModal } from ".";

export const Card = ({ name, category, price }) => {
  return (
    <div class="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
      <div className="justify-end p-4 pt-0 card-actions">
        <EditModal />
        <DeleteButton />
      </div>
    </div>
  );
};
