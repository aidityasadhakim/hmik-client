import ImageDesc2 from "./ImageDesc2";
import { Department } from "@/constant/Department";

const HomeSection2 = () => {
  return (
    <div className="w-full bg-white flex flex-col h-full mb-[100px]">
      {/* Internal */}
      <ImageDesc2
        name={Department.internal.name}
        position={Department.internal.position}
        image={Department.internal.image}
        groupImage={Department.internal.groupImage}
        text={Department.internal.text}
        title={Department.internal.title}
      />

      {/* Eksternal */}
      <ImageDesc2
        name={Department.eksternal.name}
        position={Department.eksternal.position}
        image={Department.eksternal.image}
        groupImage={Department.eksternal.groupImage}
        text={Department.eksternal.text}
        title={Department.eksternal.title}
        reverse={true}
      />

      {/* Pendidikan IT */}
      <ImageDesc2
        name={Department.pendidikanIt.name}
        position={Department.pendidikanIt.position}
        image={Department.pendidikanIt.image}
        groupImage={Department.pendidikanIt.groupImage}
        text={Department.pendidikanIt.text}
        title={Department.pendidikanIt.title}
        reverse={false}
      />
      {/* Publikasi Dokumentasi */}
      <ImageDesc2
        name={Department.pubdok.name}
        position={Department.pubdok.position}
        image={Department.pubdok.image}
        groupImage={Department.pubdok.groupImage}
        text={Department.pubdok.text}
        title={Department.pubdok.title}
        reverse={true}
      />
    </div>
  );
};

export default HomeSection2;
