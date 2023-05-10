import CarPhoto from "../../components/CarPhotos";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CommentCard from "../../components/CommentCard";
import { useUserContext } from "../../contexts/User";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { iCar } from "../../contexts/Car/type";
import { useAnnouncementContext } from "../../contexts/Announcement";
import { useForm } from "react-hook-form";
import { iCommentResponse } from "../../contexts/Announcement/types";

export default function AnnouncementPage() {
  const user = useUserContext().user;
  const [car, setCar] = useState([] as any);
  const { postComment } = useAnnouncementContext();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iCommentResponse>();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(`/vehicles/${id}`);

        setCar(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(car);

  if (!car) {
    return <div>Carro não encontrado!</div>;
  }

  return (
    <>
      <div className="bg-grey-300 flex flex-col min-h-screen justify-between">
        <Header />
        <div>
          <div className="h-[36rem] mt-20 bg-brand-400" />
          <div className="w-11/12 flex flex-col desktop:flex-row gap-[20px] justify-center items-center desktop:items-start mx-auto -mt-[33.5rem]">
            <div className="w-[46rem] flex flex-col justify-evenly items-center top-[120px]">
              <section className="w-[23rem] tablet:w-[28rem] laptop:w-[36rem] desktop:w-[45rem] h-[23rem] bg-grey-100 rounded flex items-center justify-center">
                <img
                  src={car?.coverUrl}
                  alt={car?.model}
                  className="w-[18.5rem] laptop:w-[27rem] h-[12rem] laptop:h-64"
                />
              </section>
              <section className="w-[23rem] tablet:w-[28rem] laptop:w-[36rem] desktop:w-[45rem] h-60 bg-grey-100 rounded flex justify-center mt-5">
                <div className="w-4/5 flex flex-col">
                  <h2 className="font-lexend font-semibold text-xl text-grey-1000 mt-8 mb-6">
                    {car?.title}
                  </h2>
                  <div className="flex justify-between mt-2">
                    <section className="flex">
                      <span className="w-10 h-6 bg-brand-100 rounded flex items-center justify-center text-brand-400 font-inter font-medium text-sm">
                        {car?.year}
                      </span>
                      <span className="w-14 h-6 bg-brand-100 rounded flex items-center justify-center text-brand-400 font-inter font-medium text-sm ms-2">
                        {car?.mileage}
                      </span>
                    </section>
                    <h3 className="text-grey-1000 font-lexend font-medium text-base">
                      R$ {car?.price}
                    </h3>
                  </div>
                  <a
                    href={`https://wa.me/55${user.number}?text=${car.title}`}
                    target="_blank"
                    className="w-[6.3rem] h-9 bg-brand-400 rounded text-grey-100 font-inter font-semibold text-sm hover:bg-brand-200 duration-500 mt-12 flex items-center justify-center"
                    rel="noreferrer"
                  >
                    Comprar
                  </a>
                </div>
              </section>
              <section className="w-[23rem] tablet:w-[28rem] laptop:w-[36rem] desktop:w-[45rem] h-56 bg-grey-100 rounded flex justify-center mt-5">
                <div className="w-4/5 flex flex-col">
                  <h2 className="font-lexend font-semibold text-xl text-grey-1000 mt-8 mb-6">
                    Descrição
                  </h2>
                  <p className="font-inter font-normal text-base text-grey-900">
                    {car?.description}
                  </p>
                </div>
              </section>
              <section className="w-[23rem] tablet:w-[28rem] laptop:w-[36rem] desktop:w-[45rem] min-h-full bg-grey-100 rounded flex justify-center mt-5">
                <div className="w-4/5 flex flex-col">
                  <h2 className="font-lexend font-semibold text-xl text-grey-1000 mt-8 mb-6">
                    Comentários
                  </h2>
                  {car?.comments?.map((comment: any) => (
                    <CommentCard
                      comment={comment}
                      key={comment.id}
                    ></CommentCard>
                  ))}
                </div>
              </section>
              <section className="w-[23rem] tablet:w-[28rem] laptop:w-[36rem] desktop:w-[45rem] h-72 bg-grey-100 rounded flex justify-center mt-5">
                <div className="w-4/5 flex flex-col">
                  <div className="w-36 h-8 flex mt-9 mb-4">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://images.stylight.net/image/upload/t_web_post_500x667/q_auto,f_auto/post-c798e472ed3fa9d95f35a0aa8a04c5410f22ca7062fd77278b8fe97c.jpg"
                      alt="profile pic"
                    />
                    <span className="text-gray-700 font-inter font-medium text-sm flex items-center ml-4">
                      {user.name}
                    </span>
                  </div>
                  <form onSubmit={handleSubmit(postComment as any)}>
                    <textarea
                      placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
                      className="w-full h-32 rounded border-grey-700"
                      {...register("comenttext")}
                    />
                    <button
                      className="w-[6.3rem] h-9 bg-brand-400 rounded text-grey-100 font-inter font-semibold text-sm hover:bg-brand-200 duration-500 mt-2"
                      type="submit"
                    >
                      Comentar
                    </button>
                  </form>
                </div>
              </section>
            </div>
            <div className="w-[46rem] desktop:w-[27rem] flex flex-col justify-evenly items-center top-[120px]">
              <section className="w-[23rem] tablet:w-[28rem] laptop:w-[36rem] desktop:w-[27rem] h-96 bg-grey-100 rounded flex flex-col items-center justify-center">
                <div className="w-11/12 h-full flex flex-col justify-evenly items-center desktop:items-start">
                  <p className="font-lexend font-semibold text-xl text-grey-1000 ps-1 ml-4">
                    Fotos
                  </p>
                  <div className="w-[23rem] h-60 flex flex-wrap justify-evenly items-center ml-3">
                    {car?.photos?.map((photo: any) => (
                      <CarPhoto photo={photo} key={photo.id}></CarPhoto>
                    ))}
                  </div>
                </div>
              </section>
              <section className="w-[23rem] tablet:w-[28rem] laptop:w-[36rem] desktop:w-[27rem] h-[25rem] bg-grey-100 rounded flex flex-col items-center justify-center mt-5 text-center">
                <img
                  className="w-28 h-28 rounded-full"
                  src="https://images.stylight.net/image/upload/t_web_post_500x667/q_auto,f_auto/post-c798e472ed3fa9d95f35a0aa8a04c5410f22ca7062fd77278b8fe97c.jpg"
                  alt="profile pic"
                />
                <h2 className="font-lexend font-semibold text-xl text-grey-1000 mt-5">
                  {user.name}
                </h2>
                <p className="font-inter font-normal text-base text-grey-900 mt-5">
                  {user.description}
                </p>
                <button className="w-52 h-12 bg-grey-1100 rounded text-grey-100 font-lexend font-semibold text-sm hover:bg-grey-1000 duration-500 mt-5">
                  Ver todos anúncios
                </button>
              </section>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
