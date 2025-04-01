# The Somewhat Condescending Guide to Markdown

The above is a 1st level header that is created by typing `# The Quixotic Guide to Markdown` into a text document. With the right converter, you'll be able to convert that markdown to nicely formatted HMTL. In this case, you'd end up with `<h1>The Quixotic Guide to Markdown</h1>` which some people think is harder to type than `# The Quixotic Guide to Markdown`. I'm one of those people.

Also, there should really only be one of these headers. It's like a book title—you just need one. _And_ if you have a good title, you don't need a colon and then some dumb title that more specifically and less creatively explains the title.

## A guide to using markdown written in markdown

See? You knew that. There really didn't need to be this subtitle explaining the original title. At any rate, the above is a second level header, written in markdown like this:

```
## A guide to using markdown written in markdown
```

Second level headers are generally chapter titles within a long piece that has the title of the first level heading. Are you seeing a pattern yet? No? Check this out:

### This is a section header about third level headers

Guess how I wrote out the above header in markdown.

```
### This is a section header about third level headers
```

I'm going to do the next level headers real quick just so you can see them, but I am very confident at this point that you get it.

#### Here is a subsection title

```
#### Here is a subsection title
```

If you're getting into this level of detail in whatever you're writing, I would seriously consider using roman numbers or legal numbering. I'll actually get to doing those in a moment. Let's finish the headers.

##### Here is an alternate subsection title

I don't know. I say alternate. I've never written anything down on this level. Are you writing some kind of manifesto? Here's how you do it.

```
##### Here is an alternate subsection title
```

I really hope you've figured the pattern out at this point. I'm worried if you haven't.

Here's a thing though. If you're a programmer and you can write CSS or a markdown parser, you can also use low-level headers like this for other things. They can be formatted ay which way with CSS.

```
h5 {
	/* Your crazy formatting goes here */
}
```

If you don't know CSS, ignore the above. But DO notice how pretty the code block is. I might as well tell you now that it's accomplished with three ticks, a line break and then three more ticks. I'm not sure if this is going to work but I'm going to try it. Hold on!

````
    ```
    h5 {
	   /* Your crazy formatting goes here */
    }
    ```
````

Wow! That worked. Whew.

###### Here is a note for a section

You _are_ writing a manifesto, aren't you.[^1]

In the above sentence, you'll note that I added some emphasis. There are several ways to do that. Observe the list of hipster words below feigning as a normal paragraph:

This is a typical paragraph made up of hipster words and formatting options like bold, italic and emphasis. PBR literally lomo keffiyeh butcher. Gentrify unicorn literally, yr etsy hammock DIY heirloom. Drinking vinegar _mlkshk iPhone_ brunch authentic neutra yes plz hashtag shaman vice. Single-origin coffee subway tile everyday carry raw denim vinyl four loko bushwick. _Asymmetrical polaroid butcher mixtape_, enamel pin cronut offal PBR&B swag lyft yuccie vice direct trade salvia fingerstache. Blog YOLO farm-to-table, **_authentic pok pok_** small batch man bun neutra freegan banh mi craft beer meggings **gatekeep**.

- One asterisk (`*`) surrounding a word will get you italics.
- Two asterisks (`**`) will get you bold text.
- An underscore (`_`) will get you italics.
- _Two_ underscores (`__`) will get you bold again.

Oh. Are you wondering how I did the unordered list above in markdown. Read on!

### Lists

This is an unordered list in that there are no numerals. Some people call this cardinal ordering. Generally the order of the items don't matter. Perhaps they're unrelated.

- Banana
- Vehicle
- Television
- Not a moon

You can accomplish this by simply using an asterisk or a plus sign or a dash at the beginning of the line.

```
* Banana
* Vehicle
* Television
```

I use asterisks because they're the prettiest of the punctuations. "But, Sensai!" You declare. "What if I do want numbers?"

Well, have a got an interesting tidbit for you. You can not only have your "ordered" list, you don't have to count to get it done. Check this out.

```
1. Captain America: Civil War
1. Thor: Ragnarok
1. Captain America: Winter Soldier
1. The Avengers (“Puny God”)
1. The Avengers: Infinity War
```

See how I just put the number one for every line? Markdown parsers see that you want a numeric list and just take care of the counting for you. See/

1. Captain America: Civil War
1. Thor: Ragnarok
1. Captain America: Winter Soldier
1. The Avengers (“Puny God”)
1. The Avengers: Infinity War

That's an ordered list because those are the five best Marvel movies. There are numbers there to show the order, because **THERE IS NO OTHER ORDER**.

Sometimes it so happens that you want an _unordered_ list, but you want it to start with a number. God, you're picky. There's a way to do it though. You need to

Moving on.

You can also have sub-lists in lists of course. Just indent items with spaces.

1. Cars
   1. Sports Cars
      1. Corvette
      1. Ferrarri
      1. Porsche
   1. Boring Cars
      1. That one Ford
      1. That one by Chrysler (if they're still around)
      1. Um. A Volvo
1. Trucks
   1. Big trucks

You get the idea. At least, I hope you get the idea because I am done with that very boring list. I'll try to think of more interesting formatting examples going forward, I promise.

### Blockquotes

Sometimes you're writing a big long paragraph about something and maybe you directly quote someone or maybe you say something that your editor thinks is particularly clever, like asymmetrical polaroid butcher mixtape. And your'e editor is just like, "I'm not confident that the people reading this article are really reading it, so we're going to emphasize this one phrase and then the read will be like 'Oh, I should really pay attention to this article that I am reading so that I don't miss this clever bit.'"

> Asymmetrical polaroid butcher mixtape.

#### Blockquotes with multiple paragraphs

You can put line breaks, space, and even nested blockquotes inside blockquotes. I honestly can't think of an example here. Why would you put a blockquote _inside_ another block quote? You'd have to be doing something pretty meta I think. "[House of Leaves](https://www.goodreads.com/book/show/24800.House_of_Leaves)" type shit.

> My editor thought, kindly, to set this bit apart.
>
> And then there was this other thing, not quite related that was also set apart.
>
> > "I'm the editor and I approve of setting these bits apart." [ed.]

You can do that like this:

```
> My editor thought, kindly, to set this bit apart.
>
> And then there was this other thing, not quite related that was also set apart.
>> "I'm the editor and I approve of setting these bits apart." [ed.]
```

#### Blockquotes with other elements

Blockquotes are beginning to try my patience. Just put the clever bit aside already! But here, here's a fourth level header and a list and a formatted sentence all in one block quote. Jesus.

> #### The quarterly results look awful!
>
> - Revenue was drawn to the floor.
> - Mark made that stupid joke at the board meeting.
> - Tyler mixed several metaphors when he said:
>
> "We have _got_ to slow down this **speeding bullet**."

Wow. What was Tyler thinking? I don't know but I will tell you this for free: I was at a meeting where that actual phrase was spoken. I have changed the name to protect the innocent. We did, however, have to stop the meeting and discuss it.

### Line Breaks

when times require mood  
a haiku might do the trick  
with thoughtful line breaks

You're just, one with everything, you know, man. You just want to  
_express_ yourself.
I get it. I do. You need line breaks. And luckily for us poet-types, there're really easy to create in markdown. Just put  
two spaces at the  
end of the line.

Groovy.

### Links

When I was a young developer, links were everything. That the web was open source and owned by no one and that anyone could add pages to it that linked to other pages; there was magic in that architecture. From [the first web page](http://info.cern.ch/hypertext/WWW/TheProject.html) on that's what built the web; made the web the web as far as I'm concerned.

So, if you (wisely) want to include links in your markdown doc, have I got news for you: it's _way_ easier than HTML.

HTML:

`<a href="http://info.cern.ch/hypertext/WWW/TheProject.html">the first web page</a>`

Markdown:

`[the first web page](https://bit.ly/3sg8Ay3)`

Add in some URL shortener and you've got a piece of cake!

A slightly modified version of this syntax can be used to create reference links, so that the links you are using simply end up in a list at the end of the document. In order to do that, you put the link in brackets, as above, add a number in brackets after and then include the link somewhere else on the page with the same number in brackets. Get all that? So we can talk about [the first web page][1] in this manner.

```
[The first web page][1]

[1]: https://bit.ly/3sg8Ay3
```

Easy peasy. For you own ease of readability (since that's what markdown is all about) you can also include the link text in the reference like so:

```
Time Burner's Lee created [the first web page][1]

[2]: <https://bit.ly/3sg8Ay3> "Web history"
```

Time Burner's Lee created [the first web page][1]

### Images

To add an image, add an exclamation mark (!), followed by alt text in brackets, and the path or URL to the image asset in parentheses. You can optionally add a title in quotation marks after the path or URL.

[^1]: You clicked on the first footnote! It's cool. I'm writing a manifesto too. It's about how celebrity in the United States is destroying out culture. I might give you a link to it somewhere in here. I'm also thinking about moving to Canada, the Netherlands, Ireland or Australia. Also, I'm not ready to explain footnotes yet. Keep reading.

[1]: https://bit.ly/3sg8Ay3
[2]: https://bit.ly/3sg8Ay3 'Web history'
