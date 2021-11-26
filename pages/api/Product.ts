// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json([
   {
        id:'1',
        productImage:"https://source.unsplash.com/featured/?mountains",
        productTitle:"Formula 1, DFB Cup, Premier League and much more." ,
        productSubDetail:"Discover the DAZN and Prime Video top events right next to your Sky and free TV program on your Sky Q interface.",
      productDescription: "Sky shows the Bundesliga live and in HD - linearly and in a live stream . On Sky you can see all Saturday games including the tipico top game of the week as well as matches in the English weeks, i.e. on Tuesday and Wednesday. Sky also shows parallel games in the conference call. You can see summaries of all games in All games, all goals. And with Sky Ticket in Germany or Sky X in Austria, you can be there flexibly, even without a long contract. With the match day ticket from Sky Select you can also be there live without a package",
        productButtonLabel:"More Action"
    },
    {
        id:'2',
        productImage:"https://source.unsplash.com/featured/?hiking",
        productTitle:"Bundesliga and 2nd Bundesliga live" ,
        productSubDetail:"With DAZN, experience almost all UEFA Champions League games including the conference live ",
      productDescription: "Sky shows the Bundesliga live and in HD - linearly and in a live stream . On Sky you can see all Saturday games including the tipico top game of the week as well as matches in the English weeks, i.e. on Tuesday and Wednesday. Sky also shows parallel games in the conference call. You can see summaries of all games in All games, all goals. And with Sky Ticket in Germany or Sky X in Austria, you can be there flexibly, even without a long contract. With the match day ticket from Sky Select you can also be there live without a package",
         productButtonLabel:"More Action"
    },
    {
        id:'3',
        productImage:"https://source.unsplash.com/featured/?kayak",
        productTitle:"UEFA Champions League and more with DAZN & Prime Video" ,
        productSubDetail:"When booking DAZN via Sky, you get access to the DAZN app and 2 DAZN channels activated ",
      productDescription: "Sky shows the Bundesliga live and in HD - linearly and in a live stream . On Sky you can see all Saturday games including the tipico top game of the week as well as matches in the English weeks, i.e. on Tuesday and Wednesday. Sky also shows parallel games in the conference call. You can see summaries of all games in All games, all goals. And with Sky Ticket in Germany or Sky X in Austria, you can be there flexibly, even without a long contract. With the match day ticket from Sky Select you can also be there live without a package",
         productButtonLabel:"More Action"
    }
  ])
}
