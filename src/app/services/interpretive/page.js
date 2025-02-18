import Link from 'next/link';
import Image from 'next/image';
import Subpage from '@/components/Subpage';

export const metadata = {
    title: "Interpretive Services | Services | Isotech",
    description: "Our team puts together interpretive reports for clients to assess the source, fate, and transport of natural gas and water in the vadose zone, surface water, groundwater aquifers, and oil and gas reservoirs to determine remediation, monitoring, and extraction strategies.",
};

export default function Interpretive() {
    const breadcrumbs = ["Services", "Interpretive Services"];

    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>Interpretive Services</h1>

            <p>Our team puts together interpretive reports for clients to assess the source, fate, and transport of natural gas and water in the vadose zone, surface water, groundwater aquifers, and oil and gas reservoirs to determine remediation, monitoring, and extraction strategies. We present data using diagnostic plots to identify contaminant sources, assess storage gas operations, or to enhance gas production from reservoirs for clients.</p>

            <p>You can call our facility, and we can discuss with you which types of samples you should collect and which analyses to perform to address your environmental issue or to enhance extraction capabilities. By providing us with site maps of where samples were collected and a background on what you are trying to understand using geochemical analyses, we can put together a report with proven sourcing diagrams/mixing calculations and citations to address a variety of geochemical conundrums.</p>

            <h2>Meet Our Team</h2>
            <div className="row mb-3">
                <div className="col-12 col-md-6">
                    <h3 className="fs-5">Dr. Keith C. Hackley</h3>
                    <p>Senior Geochemist</p>

                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                    </button>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>

                <div className="col-12 col-md-6">
                    <h3 className="fs-5">Dr. Myles T. Moore</h3>
                    <p>Geochemist</p>

                </div>
            </div>

            <div className="accordion" id="teamAccordion">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#teamAccordionCollapseOne" aria-expanded="false" aria-controls="teamAccordionCollapseOne">
                        Questions answered by our interpretive team
                        </button>
                    </h2>

                    <div id="teamAccordionCollapseOne" className="accordion-collapse collapse" data-bs-parent="#teamAccordion">
                        <div className="accordion-body">
                            <ul>
                                <li>Are there explosive concentrations of methane in a groundwater well?</li>
                                <li>What processes are responsible for methane in a water source? Is this microbial methane?</li>
                                <li>Did natural gas from a producing gas well, a gas storage facility or a landfill migrate into a water source?</li>
                                <li>Did a remediation project reduce or eliminate hydrocarbon contamination in an aquifer?</li>
                                <li>Is a groundwater well contaminated with brine or hydrocarbon gas and what are the processes responsible for that contamination?</li>
                                <li>If multiple sources of methane are present in a water sample, what proportion is from microbial processes? What proportion is from gas migration from a producing gas well? If multiple producing wells cause gas migration into a water well, what proportion of gas is from each well?</li>
                                <li>Are deeper brine fluids migrating into a drinking water aquifer?</li>
                                <li>What is the source of water in an aquifer?</li>
                                <li>Does recharge to an aquifer come from groundwater or surface water (precipitation)?</li>
                                <li>Where is water sourced from that is contaminated with nitrate/toxic metals?</li>
                                <li>Are injected produced fluids leaking into shallower aquifers?</li>
                                <li>Are there relationships between the age of groundwater and water quality?</li>
                                <li>Did landfill gas migrate into a groundwater well?</li>
                                <li>Did fluids from producing oil/gas wells migrate into a landfill?</li>
                                <li>What is the source of sulfate or hydrogen sulfide (H2S) in a groundwater well or in produced fluids from an oil or gas well?</li>
                                <li>What process are controlling the formation of sulfate (water rock interactions, thermochemical sulfate reduction, microbial processes)?</li>
                                <li>Is this naturally occurring sulfate/H2S or is oil and gas drilling forming sulfate/H2S?</li>
                                <li>What is the source of nitrate in a water source and is the concentration at levels dangerous to human health?</li>
                                <li>Is nitrate from reduced nitrogen fertilizer?</li>
                                <li>Is nitrate from synthetic fertilizer?</li>
                                <li>Is nitrate from septic systems?</li>
                                <li>Is nitrate from manure applications?</li>
                                <li>Is denitrification occurring in a groundwater aquifer system?</li>
                                <li>Is microbial sulfate or H2S present in a well or is sulfate or H2S from water rock interactions?</li>
                                <li>What is the concentration of lithium in produced water?</li>
                                <li>Are waters from different origins mixing?</li>
                                <li>Is subsurface carbon sequestration successfully trapping dissolved carbon dioxide in the subsurface?</li>
                                <li>What is the baseline water quality prior to drilling?</li>
                                <li>Is stray natural gas from a leaking pipeline, an underground gas storage reservoir, a swamp, microbial drift gas, coal mining, decomposition of an oil spill, leaking from an abandoned well, a producing oil or gas well, or a landfill?</li>
                                <li>What is the source of gas in a producing well? If a mixture of gas sources, what is the proportion of gas from each source?</li>
                                <li>Did storage gas enter a producing well? If so, what proportion of gas is storage gas and native gas in producing well?</li>
                                <li>Is gas from the tubing of a well leaking into the annulus spacing of the well? Could gas in the annulus space of a well be from shallower hydrocarbon bearing units or from microbial activity?</li>
                                <li>Could hydrocarbon gas be migrating into the soil gas zone and if so what is the source of that hydrocarbon gas?</li>
                                <li>Has stray gas undergone oxidation?</li>
                                <li>Has producing gas undergone a hydrocarbon isotopic reversal?</li>
                                <li>Is microbial methane formed by near surface fermentation or deep sub-surface carbon dioxide reduction?</li>
                                <li>Is the presence of hydrocarbons in a soil zone from an oil spill or from recent microbial activity?</li>
                                <li>Was cotton grown in the Xinjiang Uyghur Autonomous Region?</li>
                                <li>Could a honey sample contain sugar cane and corn syrups, rather than authentic honey derived from C3 plants?</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#teamAccordionCollapseTwo" aria-expanded="false" aria-controls="teamAccordionCollapseTwo">
                        Select publications from members of our interpretive team
                        </button>
                    </h2>

                    <div id="teamAccordionCollapseTwo" className="accordion-collapse collapse" data-bs-parent="#teamAccordion">
                        <div className="accordion-body">
                            <p><strong>Bold font</strong> indicates Isotech team member.</p>
                            <ul className="list-unstyled">
                                <li><strong>Hackley, K.C.</strong>, C.L. Liu, and D.D. Coleman. 1992. <sup>14</sup>C Dating of groundwater containing microbial CH<sub>4</sub>. <em>Radiocarbon</em>, v. 34, no. 3, p. 686-695.</li>

                                <li>Coleman, D.D., C.L. Liu, <strong>K.C. Hackley</strong>, and <strong>S.R. Pelphrey</strong>. 1995. Isotope identification of landfill methane. <em>Environmental Geosciences</em>, v. 2, no. 2, p. 95-103. </li>

                                <li><strong>Hackley, K.C.</strong>, C.L. Liu, and D.D. Coleman. 1996. Environmental isotope characteristics of landfill leachates and gases.  <em>Groundwater</em>, v. 34, no. 5, p. 827-836.</li>

                                <li>Panno, S.V., <strong>K.C. Hackley</strong>, H.H. Hwang, and W.R. Kelly. 2001. Determination of the sources of nitrate contamination in karst springs using isotopic and chemical indicators. <em>Chemical Geology</em>, v. 179, p. 113-128.</li>

                                <li>Panno, S.V., <strong>K.C. Hackley</strong>, H.H. Hwang, S.E. Greenberg, I.G. Krapac, S. Landsberger, and D.J. O&lsquo;Kelly. 2006. Characterization and identification of Na-Cl sources in ground water. <em>Groundwater Journal</em>, 44, p. 176-187.</li>

                                <li>Panno, S.V., <strong>K.C. Hackley</strong>, W.R. Kelly, and H.H. Hwang. 2006. Isotopic evidence of nitrate sources and denitrification in the Mississippi River, Illinois. <em>Journal of Environmental Quality</em>, v. 35, p. 495-504.</li>

                                <li>Panno, S.V., W. R. Kelly, <strong>K.C. Hackley</strong>, H.H. Hwang, and A.T. Martinsek. 2008. Sources and fate of nitrate in the Illinois River Basin, Illinois. <em>Journal of Hydrology</em>, v. 359, issues 1-2, p. 174-188.</li>

                                <li>Kelly, W.R., S.V. Panno, <strong>K.C. Hackley</strong>, H.H. Hwang, A.T. Martinsek, and M. Markus. 2010. Using chloride and other ions to trace sewage and road salt in the Illinois Waterway. <em>Applied Geochemistry</em>, v. 25, p. 661-673.</li>

                                <li>Hwang, H.H., S.V. Panno, and <strong>K.C. Hackley</strong>, 2015. Sources and changes in groundwater quality with increasing urbanization, northeastern Illinois. <em>Environmental and Engineering Geoscience</em>, v. 21, no. 2, p. 75-90.</li>

                                <li>Harkness, J.S., T.H. Darrah, <strong>M.T. Moore</strong>, C.J. Whyte, P.D. Mathewson, T. Cook, and A. Vengosh, 2017 Naturally occurring versus anthropogenic sources of elevated molybdenum in groundwater: evidence for geogenic contamination from southeast Wisconsin, United States. <em>Environmental Science & Technology</em> v. 51, p. 12190-12199.</li>

                                <li>Di Stefano, G., G. Romeo, A. Mazzini, A. Iarocci, S. Hadi, <strong>S. Pelphrey</strong>, 2017. The Lusi drone: A multidisciplinary tool to access extreme environments. <em>Marine and Petroleum Geology</em>, v. 90, p. 26-37.</li>

                                <li>Harkness, J.S., T.H. Darrah, N.R. Warner, C.J. Whyte, <strong>M.T. Moore</strong>, R. Millot, W. Kloppmann, R.B. Jackson, and A. Vengosh, 2017. The geochemistry of naturally occurring methane and saline groundwater in an area of unconventional shale gas development. <em>Geochimica et Cosmochimica Acta</em> v. 208, p. 302-334.</li>

                                <li>Eymold, W.K., K. Swana, <strong>M.T. Moore</strong>, C.J. Whyte, J.S. Harkness, S. Talma, R. Murray, J.B. Moortgat, J. Miller, A. Vengosh, and T.H. Darrah, 2018. Hydrocarbon-rich groundwater above shale-gas formations: A Karoo Basin Case Study. <em>Groundwater</em>, v. 56, p. 204-224.</li>

                                <li>Kreuzer, R.L., T.H. Darrah, B.S. Grove, <strong>M.T. Moore</strong>, N.R. Warner, W.K. Eymold, C.J. Whyte, G. Mitra, R.B. Jackson, A. Vengosh, and R.J. Poreda, 2018. Structural and hydrogeological controls on hydrocarbon and brine migration into drinking water aquifers in southern New York. <em>Groundwater</em>, v. 56, p. 225-244.</li>

                                <li><strong>Moore, M.T.</strong>, D.S. Vinson, C.J. Whyte, W.K. Eymold, T.B. Walsh, and T.H. Darrah, 2018. Differentiating between biogenic and thermogenic sources of natural gas in coalbed methane reservoirs from the Illinois Basin using noble gas and hydrocarbon geochemistry. <em>Geological Society, London, Special Publications</em>, v. 468, p. 151.</li>

                                <li><strong>Moore, M. T.</strong>, S.C. Phillips, A.E. Cook, and T.H. Darrah, 2022. Integrated geochemical approach to determine source of methane in gas hydrate from Green Canyon Block 955 in the Gulf of Mexico. <em>AAPG Bulletin</em> v. 106, 5, p. 949-980</li>

                                <li><strong>Moore, M. T.</strong>, M. Mugivhi, and <strong>K.C. Hackley</strong>, 2024. Baseline assessment of groundwater quality in the Karoo Basin, South Africa. <em>Goldschmidt Conference</em>. Chicago, Illinois</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Subpage>
    );
}