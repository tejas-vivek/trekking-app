import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
    backgroundImage: string;
    title: string;
    subtitle: string;
    peopleJoined: string
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
    return (
        <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
            <div className="flex h-full flex-col items-start justify-between p-4 lg:px-20 lg:py-10">
                <div className="flexCenter gap-4">
                    <div className="rounded-full bg-green-50 p-4">
                        <Image
                            src="/folded-map.svg"
                            alt="map"
                            width={28}
                            height={28}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="bold-18 text-white">{title}</h4>
                        <p className="regular-16 text-white">{subtitle}</p>
                    </div>
                </div>

                <div className="flexCenter gap-8">
                    <span className="flex -space-x-4 overflow-hidden">
                        {PEOPLE_URL.map((url) => (
                            <Image
                                className="inline-block h-12 w-12 rounded-full"
                                src={url}
                                key={url}
                                alt="person"
                                width={52}
                                height={52}
                            />
                        ))}
                    </span>
                    <p className="bold-16 lg:bold-20 text-white">{peopleJoined}</p>
                </div>
            </div>
        </div>
    )
}

const Camp = () => {
    return (
        <section className='2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-10'>
            <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
                <CampSite
                    backgroundImage="bg-bg-img-1"
                    title="Putuk Truno Camp"
                    subtitle="Prigen, Pasuruan"
                    peopleJoined="50+ Joined"
                />
                <CampSite
                    backgroundImage="bg-bg-img-2"
                    title="Mountain View Camp"
                    subtitle="Somewhere in the wild"
                    peopleJoined="50+ Joined"
                />
            </div>
            <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
                <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
                    <h2 className="regular-20 md:regular-32 2xl:regular-48 capitalize text-white">
                        <strong>feeling lost</strong> and not knowing the way?
                    </h2>
                    <p className="regular-14 lg:regular-16 text-white mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime voluptatum delectus odio pariatur illo voluptatibus temporibus, recusandae velit error iste aspernatur facere explicabo quis, odit veritatis corrupti at iusto minus!
                    </p>
                    <Image 
                    src="/quote.svg"
                    alt="camp-2"
                    width={186}
                    height={219}
                    className="camp-quote"
                    />
                </div>
            </div>
        </section>
    )
}

export default Camp