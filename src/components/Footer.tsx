import Image from "next/image";

const coHostLogos = [
  {
    src: "/images/coHost/UBM.webp",
    alt: "UBM",
    width: 110,
    height: 100,
  },
  {
    src: "/images/coHost/UCO.webp",
    alt: "UCO",
    width: 110,
    height: 100,
  },
  {
    src: "/images/coHost/UKSW.webp",
    alt: "UKSW",
    width: 110,
    height: 100,
  },
  {
    src: "/images/coHost/Uhamka.webp",
    alt: "Uhamka",
    width: 110,
    height: 100,
  },
  {
    src: "/images/coHost/UnivMuhammadiyahTangerang.webp",
    alt: "Universitas Muhammadiyah Tangerang",
    width: 110,
    height: 100,
  },
  {
    src: "/images/coHost/unbra.webp",
    alt: "Unbra",
    width: 110,
    height: 100,
  },
];

const publiOportunitiesLogos = [
  {
    src: "/images/publicationOportunities/doaj.jpg",
    alt: "DOAJ",
    width: 150,
    height: 80,
  },
  {
    src: "/images/publicationOportunities/indexCopernicus.jpg",
    alt: "Index Copernicus",
    width: 110,
    height: 100,
  },
  {
    src: "/images/publicationOportunities/jaef.jpg",
    alt: "JAEF",
    width: 110,
    height: 100,
  },
  {
    src: "/images/publicationOportunities/mapi.jpg",
    alt: "MAPI",
    width: 110,
    height: 100,
  },
  {
    src: "/images/publicationOportunities/rme.jpg",
    alt: "RME",
    width: 110,
    height: 100,
  },
  {
    src: "/images/publicationOportunities/sinta.jpg",
    alt: "SINTA",
    width: 110,
    height: 100,
  },
];

const sponsorLogos = [
  {
    src: "/images/sponsored/rihandCreative.jpg",
    alt: "Rihand Creative",
    width: 150 * 1.7,
    height: 100 * 1.7,
  },
];

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      {/* Garis hijau di bagian atas */}
      <div style={{ backgroundColor: "#0C2A56", height: "4px" }} />

      <div className="container mx-auto p-8">
        {/* Hosted by Section */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Hosted by</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          {/* Universitas Ciputra Logo */}
          <div className="flex-1 flex justify-center max-w-xs md:max-w-sm">
            <Image
              src="/logoUC.png"
              alt="Universitas Ciputra"
              width={350}
              height={100}
              priority
              style={{ objectFit: "contain" }}
            />
          </div>
          {/* Student Union Logo */}
          <div className="flex-1 flex justify-center max-w-xs md:max-w-sm">
            <Image
              src="/logoSU.png"
              alt="Student Union International Business Management"
              width={250}
              height={100}
              priority
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        {/* Co-Hosted by Section */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold">Co-Hosted by</h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-12">
          {coHostLogos.map((logo, index) => (
            <div key={index} className="p-2">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
        {/* End of Co-Hosted by Section */}

        {/* Publication Opportunities Section */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold">Publication Opportunities</h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-10">
          {publiOportunitiesLogos.map((logo, index) => (
            <div key={index} className="p-2">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
        {/* End of Publication Opportunities Section */}

        {/* Sponsored by Section */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold">Sponsored by</h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-10">
          {sponsorLogos.map((logo, index) => (
            <div key={index} className="p-2">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
        {/* End of Sponsored by Section */}

        {/* Contact Information */}
        <div
          className="mt-8 rounded-full py-4 px-8 text-white text-center max-w-lg mx-auto"
          style={{
            background: "linear-gradient(to right, #0C2A56, #144373)",
          }}
        >
          <p className="font-medium">Contact Person:</p>
          <p className="font-bold">Eddrick Chang (WA: +62 812 5396 7535)</p>
          <p className="font-bold">Email: icombus@ciputra.ac.id</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
