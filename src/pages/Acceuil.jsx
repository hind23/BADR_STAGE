import  { useState } from 'react';
import finance from "/Tout-savoir-sur-la-finance-islamique.jpg";
import badr from "/bg_badr.svg";
import expert from "/Finance_Expert.jpg";
import logo from "/logo_removebg.png"
import picture1 from "/businessman-badr.jpg"

export const Accueil = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleText = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        < div className='w-[100vw]'>
           

            <div className="relative mt-[55px] h-[80vh] w-[100vw]">
                <img src={expert} alt="Expert en finance" className="absolute left-0 right-0 w-full h-full object-cover" />
                
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
                    <h2 className="text-4xl sm:text-left text-center font-bold mb-4">Financement islamique</h2>
                    <p className="text-lg mt-4 px-8 text-center max-w-3xl">
                    
                            Le financement islamique est un système financier qui respecte les principes de la loi islamique (Shariah). Il interdit les intérêts (riba) et les pratiques financières considérées comme spéculatives ou injustes. Les produits et services sont conçus pour être éthiques et conformes aux valeurs islamiques, favorisant la justice sociale et l'équité."
                            Le financement islamique est un système qui respecte les principes de la loi islamique, interdisant les intérêts et les pratiques financières injustes."
                    
                    </p>
                  
                </div>
                <img 
            src={logo} 
            alt={"logo"} 
            className="w-1/6 h-auto object-cover absolute top-10 right-4 " // Adjust width and positioning
          />
            </div>

            <div className="font-roboto h-fit" style={{
                backgroundImage: `url(${badr})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                width: '100vw', // Set the width to 100vw
                display: 'flex',
                flexDirection: 'column',
            }}>

        
                {/* Flex container to align text and image horizontally */}
                <div className="sm:flex items-center justify-center sm:space-y-0 space-y-4 sm:space-x-8 mt-4 mr-10 ml-10">
                    {/* Titles and Paragraph */}
                    <div className="sm:w-1/2 bg-white rounded-lg p-8">
                        <h2 className="font-bold text-[36px] mb-2">Banque islamique</h2>
                        <p className="text-[20px] font-semibold mb-4">
                            Conformément à la loi islamique et aux directives du Conseil suprême islamique
                        </p>
                        <p className="text-[#7A838B]">
                            {isExpanded 
                                ? "La Banque d'Agriculture et de Développement Rural propose une gamme de plus de 16 produits financiers conformes aux principes de la finance islamique, selon la loi islamique et les directives du Conseil Suprême Islamique. Que vous soyez un particulier ou une institution, vous pouvez bénéficier de services tels que l'ouverture de comptes courants islamiques, de comptes d'épargne, ou de comptes \"petits\" pour les jeunes épargnants. En plus, la banque offre des transactions financières de type Mourabaha, un système de financement éthique et transparent basé sur l'achat et la vente de biens, idéal pour concrétiser vos projets personnels ou professionnels, tout en respectant les valeurs de la Shariah."
                                : "La Banque d'Agriculture et de Développement Rural propose une gamme de plus de 16 produits financiers conformes aux principes de la finance islamique. Que vous soyez un particulier ou une institution, vous pouvez bénéficier de services tels que l'ouverture de comptes courants islamiques, de comptes d'épargne, ou de comptes \"petits\" pour les jeunes épargnants."
                            }
                        </p>
                        <button 
                            className="text-white bg-[rgb(8,85,38)] py-2 px-5 mt-2 rounded" 
                            onClick={toggleText}
                        >
                            {isExpanded ? "Lire moins" : "Lire plus"}
                        </button>
                    </div>
                    <img src={finance} alt="Finance islamique" className="block   shadow-lg mx-auto sm:w-1/2 w-full rounded-lg " />
                </div>

 <div className="bg-white mt-10 p-8 rounded-lg mx-10 shadow-lg">
                    <h3 className="font-bold text-2xl mb-4">Qu'est-ce que le Financement Islamique ?</h3>
                    <p className="text-[#7A838B] mb-4">
                        Le financement islamique repose sur des principes éthiques de la Sharia, interdisant l’intérêt (riba) et les transactions spéculatives (gharar). Il s'appuie sur des partenariats justes et transparents, où le risque et la récompense sont partagés entre les parties. Les produits financiers sont basés sur des actifs réels, favorisant ainsi une économie réelle et réduisant les risques de bulles financières.
                    </p>
                    <p className="text-[#7A838B] mb-4">
                        Les principaux modes de financement islamique incluent la Mourabaha (financement par l'achat et la revente de biens avec une marge bénéficiaire convenue), l'Ijara (location-vente ou leasing islamique), et la Moudharaba (partenariat d'investissement où le capital est fourni par une partie et la gestion par une autre). Ces services visent à promouvoir l'équité et l'intégrité dans les transactions financières.
                    </p>
                </div>

                {/* Nouvelle section sur les missions et l'impact de la BADR */}
                <div className="bg-white mt-10 p-8 rounded-lg mx-10 shadow-lg">
                    <h3 className="font-bold text-2xl mb-4">L'Engagement de la BADR</h3>
                    <p className="text-[#7A838B] mb-4">
                        La Banque d'Agriculture et de Développement Rural (BADR) a pour mission de soutenir le secteur agricole en Algérie, en fournissant des crédits et en favorisant les investissements dans l'agriculture, l'agroalimentaire et l'artisanat. En tant que pionnière de la finance islamique en Algérie, la BADR offre des services financiers conformes à la Charia, répondant aux besoins de ses clients tout en respectant leurs valeurs éthiques.
                    </p>
                    <p className="text-[#7A838B] mb-4">
                        Depuis 2017, la BADR s'efforce de diversifier ses services en proposant plus de 16 produits financiers islamiques, conçus pour être justes et transparents. Avec un réseau de 340 agences, la banque continue d’élargir son impact en répondant aux besoins des particuliers, des entreprises, et des jeunes épargnants à travers des produits comme les comptes d’épargne islamiques et le financement Mourabaha.
                    </p>
                </div>
            </div>
        </div>
    );
};