

interface CardComponentProps {
  imageUrl: string;
  title: string;
  description: string;
  ButtonComponent:React.FC
}

const CardComponent: React.FC<CardComponentProps> = ({
  imageUrl,
  title,
  description,
  ButtonComponent
}) => {
  return (
    <div className="flex justify-center">
      <div
        className="flex mt-20 h-[240px] w-[480px] rounded-3xl aspect-square overflow-hidden bg-cover justify-end"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="h-[230px] w-[300px] flex flex-col justify-between  p-4 bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div>
              <h2 className="text-xl font-bold text-wrap">{title}</h2>
              <p className="text-sm text-wrap">{description}</p>
          </div>
          <div className="flex justify-center">
            <ButtonComponent/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
