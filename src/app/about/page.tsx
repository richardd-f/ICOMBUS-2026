import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <div className="bg-white">
      <Navbar />
      <header className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16">
          {/* Judul utama */}
          <h2 className="text-[48px] font-semibold text-[#0C2A56] text-center mb-8">
            About ICOMBUS
          </h2>

          <div className="text-gray-700 text-justify text-lg space-y-6">
            <p>
              In recent years, rapid technological advancement and global economic shifts have fundamentally transformed the way organizations are managed and businesses are conducted. Digital transformation, sustainability challenges, and increasing global competition have encouraged governments, corporations, and academic communities to rethink conventional management and business strategies. Issues such as business sustainability, ethical practices, innovation, digitalization, and human capital development have become central topics in ensuring long-term economic resilience and inclusive growth.
            </p>

            <p>
              The integration of management, entrepreneurship, and accounting plays a crucial role in supporting sustainable development in the digital era. Effective management strategies are needed to respond to technological disruption, while entrepreneurship drives innovation and value creation. At the same time, accounting and financial management provide transparency, accountability, and strategic insights that support sound decision-making in increasingly complex business environments. Together, these disciplines form the foundation for organizations to adapt, grow, and remain competitive while contributing positively to society.
            </p>

            <p>
              International Conference on Management and Business Strategy (ICOMBUS) is an international-scale academic conference that serves as a platform for researchers, academics, practitioners, policymakers, and students to share ideas, research findings, and best practices in management and business. ICOMBUS aims to encourage interdisciplinary discussions and global collaboration in addressing contemporary challenges in business and management, particularly in the context of digital transformation and sustainable development.
            </p>

            <p>
              The conference theme, “Integrating Management, Entrepreneurship, and Accounting for Digital Transformation toward a Sustainable Future,” reflects the growing need for holistic and innovative approaches in managing organizations and businesses. This theme emphasizes the importance of aligning strategic management, entrepreneurial mindset, technological innovation, and financial accountability to achieve sustainable economic growth in both local and global contexts.
            </p>

            <p>
              ICOMBUS covers a wide range of topics, including but not limited to business sustainability, business ethics, innovation, digital transformation, entrepreneurship management, international business, marketing management, human capital and leadership, accounting and finance, taxation, tourism and hospitality, creative industries, and management information systems. Through these topics, the conference seeks to contribute to the development of knowledge that supports ethical, innovative, and sustainable business practices.
            </p>

            <p>
              By bringing together diverse perspectives from various countries and disciplines, ICOMBUS is expected to strengthen academic networks, promote knowledge exchange, and inspire practical solutions to current and future challenges in management and business. Ultimately, ICOMBUS aspires to contribute to the advancement of management and business strategies that are adaptive, responsible, and sustainable in the era of digital transformation.
            </p>
          </div>
        </div>
      </header>
      <Footer />
    </div>
  );
}
