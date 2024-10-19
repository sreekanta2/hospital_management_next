"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link, X } from "lucide-react";

export default function InvoiceDetailsModal() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Link
            size={28}
            className="bg-slate-100 border border-slate-300 hover:bg-blue-500 hover:text-white rounded-full p-1 transition-all duration-300 ease-in-out cursor-pointer dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-blue-500 dark:hover:text-white mb-1"
          />
        </DialogTrigger>

        <DialogContent className="   max-w-[800px] w-full    [data-state='open']:bg-white ">
          {/* Full height scrollable content */}
          <div className="border-b pb-4 border-slate-300">
            <DialogClose asChild>
              <X
                className="absolute right-2 border bg-gray-300 text-gray-500 rounded-full top-4 cursor-pointer p-[2px] transition-all duration-300 ease-in-out hover:bg-red-700 hover:text-white"
                size={24}
              />
            </DialogClose>
            <DialogHeader>
              <DialogTitle>View Invoice</DialogTitle>
            </DialogHeader>
          </div>

          <ScrollArea className="h-[calc(100vh-10rem)] pr-2">
            {/* Invoice content goes here */}
            <div className="py-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                nulla earum temporibus fuga saepe quos, odit quisquam id
                laudantium quibusdam deleniti illum nemo numquam quo non
                architecto eius magnam atque dolores debitis ex aspernatur
                possimus? Non incidunt unde doloremque at dolores, vero enim
                sapiente illum iure architecto quidem? Dolorem architecto
                consectetur mollitia nulla, porro, corporis totam doloremque,
                consequuntur sint quidem recusandae doloribus laboriosam
                aspernatur enim. Mollitia qui, ad voluptatem voluptates
                inventore error id culpa ducimus, delectus incidunt quas
                accusantium deleniti molestias ipsum soluta eaque unde dolore
                esse assumenda eos consequuntur. Aliquam incidunt autem,
                reiciendis expedita doloremque magni porro aspernatur
                consequuntur ipsam, dolores cumque sunt laudantium dolorum quo
                sit harum eaque, at quia. Similique error excepturi impedit
                iusto in nisi? Velit distinctio nulla eaque tempora. Eaque
                dolores, sed fugiat beatae ad sequi officiis, sapiente
                consectetur atque laborum libero voluptatem nihil maiores
                repellat repellendus tenetur aliquid asperiores! Aspernatur quia
                vitae temporibus voluptate sed omnis dolore accusantium ab
                exercitationem, distinctio natus possimus nesciunt ad animi
                corrupti at facilis. Adipisci, in? Dolores modi, ratione natus
                iusto autem nisi aliquam assumenda, aliquid tempora enim in
                similique eveniet eligendi. Dolorum explicabo sunt incidunt rem
                sequi repellat, aliquid quibusdam harum optio eveniet, error
                molestiae maxime natus quisquam placeat, laborum exercitationem
                id hic vero. Quisquam mollitia, dolores debitis qui soluta quo,
                eaque illum autem, commodi saepe inventore. Illum, adipisci
                delectus! Magnam harum itaque cumque tempora quia dolorum vel
                aperiam praesentium voluptatibus ab consectetur, laboriosam
                maiores quaerat vitae ad molestias quisquam rem. Voluptatum
                earum distinctio voluptate cumque eligendi sit eius, obcaecati
                cupiditate incidunt expedita consequuntur magnam natus dolorem
                aliquid laudantium nemo! Doloribus ut aliquid sequi suscipit hic
                placeat corporis dolor sit, rem harum, cum quod officia nulla
                facilis laudantium optio, temporibus error quis ullam alias sunt
                ex. Fuga inventore at culpa dolor! Quam repellendus nihil
                dolore! Sint quae dolore iste voluptatum fugiat soluta enim
                perferendis quisquam quos nostrum dolor incidunt ratione, in
                inventore ea, quis veritatis amet! Quos nulla iusto consequuntur
                doloribus adipisci. Nisi consequatur totam debitis consequuntur
                quo aliquid culpa, corporis vitae odit sapiente nam ipsa
                laborum, nostrum nihil. Dolorem perspiciatis quam tempore qui et
                eum deleniti corrupti saepe aut voluptas repellat autem, nobis
                excepturi distinctio ipsa, dolor, reprehenderit quibusdam
                possimus. Aperiam eos earum non, ad eligendi quia consequuntur
                officiis suscipit minus nemo laudantium vel sequi tenetur
                mollitia, tempore quam et. Quod quo odio minus illum a
                temporibus est dolores id aspernatur, nobis unde, ullam expedita
                iusto ad. Vero voluptate eum reiciendis, molestiae ipsum id
                aperiam fugiat corrupti excepturi rerum, ex iure fugit vel illum
                beatae similique. Consequuntur laborum sint culpa, assumenda
                esse error inventore rerum, molestiae necessitatibus
                perspiciatis suscipit earum maiores hic mollitia nulla libero
                eveniet amet ullam? Magnam, harum! Quas provident obcaecati
                quidem reprehenderit voluptatum error sapiente inventore nemo
                maiores repellat hic, exercitationem sint id ullam natus facilis
                aspernatur placeat molestias necessitatibus at ea. Unde
                dignissimos adipisci neque cumque, error doloribus incidunt,
                praesentium magni possimus, deserunt vel nobis quasi assumenda
                culpa nostrum repellat quis non sapiente facere. Veniam harum
                distinctio temporibus deleniti illo dolorum a neque vitae non
                blanditiis ipsam explicabo, quam, autem consequatur! Minus earum
                dignissimos, inventore similique illo dolorum praesentium amet
                fuga! Consequatur quibusdam id voluptatem reiciendis voluptas
                laudantium itaque adipisci ratione deleniti, a quod praesentium
                doloremque quo recusandae? Nostrum rem perspiciatis ad! Alias
                numquam maxime, quibusdam quia voluptas aspernatur ex non vero a
                fugit! Ad eum asperiores amet ut repudiandae quis facere veniam
                maiores neque architecto! Tenetur voluptatum suscipit laboriosam
                sed, recusandae iste ut deserunt, iure at dicta quos, expedita
                voluptates atque? Quidem nulla facilis iure voluptatum magni
                esse molestias nihil aliquid accusantium, ipsum culpa minus
                aperiam? Minima similique alias vero eaque quisquam voluptates
                et assumenda quis dicta laborum ratione quia, ullam a libero
                reprehenderit dignissimos sed architecto mollitia quae officia.
                Commodi, rerum ducimus repellendus explicabo culpa dignissimos
                quaerat, iure enim quod amet possimus? Dolore similique ab
                ratione animi praesentium ipsa tempore sapiente et
                necessitatibus neque voluptatem nesciunt deserunt, commodi,
                numquam voluptatum mollitia? Minima quos ea inventore mollitia
                nam explicabo adipisci, optio, ipsum quae corrupti itaque
                tenetur numquam doloribus, in sapiente! Non nihil cumque
                provident, ratione voluptates vero officia officiis doloribus
                ipsa omnis nisi sit explicabo nesciunt aperiam at facilis quia
                dolores, vel sequi porro! Ipsum nam commodi laudantium, qui,
                alias expedita facere, sequi voluptatibus deleniti ex ipsam
                nisi? Modi repellendus obcaecati magni corrupti? Voluptas,
                excepturi est fugit, odit, possimus vitae eligendi a ducimus
                minus nemo optio esse similique consequuntur. Aspernatur illum
                et asperiores, pariatur nisi esse nemo fuga ea cumque fugit
                suscipit, quam nihil, omnis in consectetur corrupti! Architecto
                dolores neque animi quos harum, quae quidem suscipit impedit
                eaque expedita. Explicabo voluptatum repellat similique
                voluptatibus sequi dolore tempora, aperiam sapiente assumenda?
                Inventore esse quas doloribus dicta ab possimus explicabo rem
                reiciendis aperiam molestias tempore, in minus soluta deleniti
                provident exercitationem expedita natus asperiores. Quis quod
                velit vero explicabo animi molestiae! Veniam esse obcaecati quo
                suscipit fugiat eos illo temporibus dolore et. Adipisci id nemo
                temporibus? Hic odio cum aliquam atque ipsam non voluptas dolore
                laborum, quisquam nesciunt at sint magni laudantium officia
                totam iste inventore esse maiores voluptatum tempore quae quos
                accusamus et voluptate! Animi quisquam libero inventore odit
                quae molestiae, neque quo dicta harum repellendus facere
                corrupti iusto ipsam provident deserunt iste dolorem, ducimus
                modi accusamus nulla distinctio qui quod! Libero officiis unde
                laudantium quia dolorem officia, modi, omnis quod explicabo
                blanditiis cumque totam qui illum quo reprehenderit soluta ex,
                mollitia repudiandae tenetur! Numquam, ut illum nemo dolore
                maiores inventore temporibus. Numquam sed deserunt modi
                corrupti, itaque incidunt ullam ipsa cum rerum, sunt
                exercitationem provident suscipit! Obcaecati aliquam accusamus
                necessitatibus error quisquam distinctio, reprehenderit suscipit
                exercitationem odit quis nam repudiandae? Atque necessitatibus
                beatae facilis perferendis accusamus nisi quos temporibus dolore
                at, laboriosam ab corrupti voluptatibus aspernatur iste
                repellendus praesentium ullam. Quisquam quo blanditiis
                necessitatibus reprehenderit quae? Quas ad nulla quisquam illo
                ipsum, eum magnam dolor reiciendis eos magni reprehenderit
                tempore libero, fuga qui tenetur dolorum tempora. Libero, non
                placeat quod atque expedita esse! Ab placeat aut ratione odio
                expedita. Sint soluta quidem quo id dignissimos. Labore sed
                assumenda voluptatum, et laudantium id architecto molestiae
                maxime quaerat, quod ut iusto mollitia! Consequuntur, saepe odit
                libero esse ex pariatur impedit quibusdam officia ut! Placeat
                accusantium quo eaque inventore quas vitae, corrupti
                perspiciatis cupiditate ratione amet recusandae laborum odio
                earum nulla nisi dolorem ipsam suscipit explicabo ab dicta
                doloribus ipsum! Iure ad expedita perspiciatis similique
                asperiores repudiandae ab recusandae culpa voluptatem debitis
                quia eos neque enim nemo nisi illo consequuntur eveniet, maiores
                atque hic? Totam harum incidunt fugiat repellendus sit debitis
                odit inventore consequuntur aperiam? Totam natus error vel
                inventore neque in eos odit fugit accusantium est sit, amet
                sint. Voluptas fugit quibusdam perspiciatis accusamus, odio
                voluptate animi modi accusantium, officiis enim ad, libero
                magni? Eligendi sit ipsum velit delectus reprehenderit
                consectetur dolores, libero alias molestias doloribus et
                distinctio tenetur eum repellat recusandae natus exercitationem
                quisquam quod rerum. Architecto porro totam eveniet velit vero
                placeat facilis molestias sequi deserunt amet est fugiat dolor
                aperiam temporibus quo illum cum repudiandae debitis omnis,
                ipsum voluptatibus. Quam reiciendis ea aliquam velit nemo
                pariatur sequi impedit alias saepe fugiat, iusto ipsum suscipit
                eius, repellendus illum. Vero possimus atque aliquam repellendus
                incidunt placeat, adipisci veniam? Excepturi, esse? Aperiam
                laborum quod a rerum illo porro consequuntur, earum perspiciatis
                inventore quibusdam, nulla modi fugit eaque aut accusamus sed
                facere! Accusantium a exercitationem, blanditiis modi expedita
                corporis similique natus quasi velit facilis non iusto ipsum
                harum accusamus fugiat. Recusandae perspiciatis porro libero
                minima eaque eos quos? Aspernatur dicta ad veritatis laboriosam
                natus, recusandae earum accusantium, laborum eum ea aliquid
                explicabo quam alias magni quidem porro error eius illum
                provident amet praesentium ducimus, esse inventore vitae.
                Tenetur vero necessitatibus maiores consectetur corporis dolore,
                tempore perferendis doloribus, quos iusto et, iste dolorem odit?
                Quia dignissimos vitae earum quos provident temporibus doloribus
                quas consequuntur necessitatibus! Repellendus exercitationem
                iste unde iure dolores officia, aperiam recusandae molestias
                minus! Porro atque alias deleniti in, autem unde necessitatibus
                ipsam numquam obcaecati molestiae sunt dolorem, rerum, rem
                laudantium voluptatibus fugit aspernatur ratione voluptatum
                dolore optio! Maiores commodi iusto alias dolor at tempora
                distinctio et quo obcaecati explicabo unde autem debitis veniam
                minus rem aliquam totam, tempore ad ipsa beatae. Voluptates sed
                esse sit, autem alias repellat quos blanditiis. Neque aliquam
                amet tempore, odit veniam labore, debitis, impedit nisi sequi
                quam ab optio autem ducimus deleniti exercitationem. Quod porro,
                quaerat obcaecati laborum beatae repellendus veritatis eos.
                Soluta modi deleniti, obcaecati dolorem ipsum laudantium
                provident nesciunt? Sunt eos totam vel ipsum exercitationem
                error, aliquam earum veritatis dolorum adipisci consequatur
                dolor ad architecto provident quia molestiae assumenda. Aut
                sapiente animi ipsa deserunt vitae quae illo maxime itaque esse
                a, officiis deleniti veniam impedit sit cumque expedita
                asperiores. Maxime obcaecati cum provident ut nesciunt impedit.
                Maxime nostrum, minus fugit molestiae dolorem harum error
                repellat, quidem, inventore saepe omnis deleniti quis quam!
                Quis, nesciunt blanditiis quia suscipit rem distinctio fugit
                fuga, vel pariatur atque numquam natus quidem iste voluptas
                laborum tempore quos nisi quam deserunt reiciendis sed ab iure!
                Cumque autem deserunt dolor molestias quas numquam esse, iste
                corrupti consectetur quidem pariatur temporibus nesciunt itaque?
                Itaque id sint doloremque est quibusdam ratione rerum, ad odio
                nostrum maxime amet? Error corporis reiciendis nobis quam nihil,
                ex et commodi itaque. Ducimus, laudantium! Alias culpa ratione
                non perferendis nobis itaque consequuntur aliquam enim error?
                Corrupti ipsum possimus tenetur rerum minus harum pariatur
                aspernatur! Dolore aliquam quas magni nesciunt nulla, voluptate
                eveniet commodi fugiat deserunt et ipsam tempore reiciendis
                inventore dicta quidem perspiciatis quisquam ullam sint nihil
                est? Atque voluptas minus dolorum aliquid incidunt ipsam labore
                porro laudantium blanditiis quidem, debitis adipisci eius
                officia, illo tenetur alias, numquam veniam. Consequatur id
                similique optio quaerat repudiandae aut exercitationem obcaecati
                labore numquam vitae sit fugiat iste unde earum dolore sint
                porro nulla ducimus quam quae, assumenda asperiores corrupti
                dolor repellat? Consequuntur autem quasi sed aspernatur hic
                minus delectus eveniet facilis nobis nisi, praesentium
                inventore. Deserunt eos porro, nulla natus mollitia consectetur
                nostrum ad beatae temporibus saepe ea eveniet maxime! Veritatis
                ut, distinctio corporis nobis quod dolores quidem doloribus qui
                eligendi modi error ex ad eaque sit illum tempora nesciunt
                laborum eveniet? Quo modi a consequuntur obcaecati explicabo
                nulla sequi, voluptates dolores ratione dolore? Explicabo
                excepturi facere ea obcaecati, harum perferendis repudiandae,
                sint, asperiores minus temporibus odio ipsam. Repudiandae eius
                dicta voluptatibus placeat reprehenderit ipsa ratione omnis, eum
                saepe quidem error voluptatum quas amet, fuga quia voluptatem,
                suscipit quibusdam velit est ducimus ullam! Ipsam, officiis
                praesentium quos sit illo voluptatem porro odio, earum ea
                reiciendis modi voluptates deserunt beatae vero tempore quas
                esse eligendi qui? Sapiente ex illo assumenda earum velit totam.
                Cum quis esse neque nihil dignissimos consequuntur placeat
                impedit? Molestiae at quam totam aliquam dolores iusto quae
                dignissimos quisquam omnis adipisci nesciunt, tempora sunt
                deserunt sequi modi temporibus accusantium repellat iure quis.
                Blanditiis quisquam pariatur alias dolores explicabo veniam
                animi consequuntur accusamus reiciendis debitis atque iste
                quibusdam nostrum delectus asperiores natus, non distinctio quo
                illum rem. Laboriosam eos rem qui earum a deleniti tenetur?
                Inventore amet aliquid ipsam ipsa perspiciatis! Ratione cumque
                quaerat dolorum iure, eius libero veniam repellendus assumenda
                adipisci eum! Error animi quidem culpa dolor facere vitae unde
                beatae rerum repellendus, dicta reiciendis consequatur cum
                quibusdam libero voluptate inventore. Reiciendis voluptatibus
                maxime sapiente molestias nobis, aut cumque suscipit, cupiditate
                officiis dolore, corporis commodi esse. Maxime quo animi nostrum
                at possimus dolores corrupti dolorum exercitationem debitis
                ratione a eaque enim odio, eveniet mollitia sequi est! Sit
                possimus dolores modi, totam odit nostrum rerum omnis porro
                ratione soluta tempore harum accusamus sapiente facilis a dicta
                consequatur officia architecto ipsa quod ab, suscipit itaque.
                Nostrum soluta placeat illum nulla numquam quas possimus
                necessitatibus perferendis, modi repellat est sapiente sed saepe
                suscipit porro facilis, corporis veritatis officiis veniam
                laborum molestias beatae officia debitis tempore! Numquam nisi
                eligendi quo accusamus culpa asperiores error, iure saepe
                explicabo magnam distinctio maiores, repudiandae porro ipsa?
                Soluta similique neque corrupti pariatur dicta. Officia ducimus
                quisquam reiciendis vel consequatur, incidunt mollitia sequi
                aspernatur cumque id repellat nostrum harum maxime numquam
                praesentium beatae iusto labore debitis impedit excepturi. Quam,
                voluptates. Nisi cupiditate iste quia dolore voluptatum nihil
                eveniet consectetur!
              </p>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
}
