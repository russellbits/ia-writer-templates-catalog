# Heading Level 1

## Heading Level 2

### Heading Level 3

#### Heading Level 4

##### Heading Level 5

###### Heading Level 6

### Paragraph (with bold and italic formatting)

- One asterisk (`*`) surrounding a word will get you italics.
- Two asterisks (`**`) will get you bold text.
- An underscore (`_`) will get you italics.
- _Two_ underscores (`__`) will get you bold again.

Baby **photo** _booth_ street art _beard_, af intelligentsia trust fund bespoke. Chillwave tousled disrupt, lomo taiyaki shabby chic mukbang viral 8-bit try-hard la croix vibecession selfies scenester pop-up. Authentic tattooed cupping hammock. **Meh mixtape** kogi lo-fi 90's, you probably haven't heard of them tousled bespoke asymmetrical wayfarers seitan. Ugh austin godard DIY big mood meh brunch ascot cronut.

### Sentence with link

HTML:

`<a href="http://info.cern.ch/hypertext/WWW/TheProject.html">the first web page</a>`

Markdown:

`[the first web page](https://bit.ly/3sg8Ay3)`

Add in some URL shortener and you've got a piece of cake!

When I was a young developer, links were everything. That the web was open source and owned by no one and that anyone could add pages to it that linked to other pages; there was magic in that architecture. From [the first web page](http://info.cern.ch/hypertext/WWW/TheProject.html) on that's what built the web; made the web the web as far as I'm concerned.

### Lists:

#### Numbered List

1. One
2. Fruit
3. Dog

#### Numbered List with Sub-lists

1. Cars
   1. Sports Cars
      1. Corvette
      1. Ferrari
      1. Porsche
   1. Boring Cars
      1. That one Ford
      1. That one by Chrysler (if they're still around)
      1. Um. A Volvo
1. Trucks
   1. Big trucks

#### Unnumbered List

- One
- Fruit
- Dog

#### Task List

- [ ] One
- [ ] Fruit
- [ ] Dog

### Blockquotes

> Baby photo booth street art beard, af intelligentsia trust fund bespoke. Chillwave tousled disrupt, lomo taiyaki shabby chic mukbang viral 8-bit try-hard la croix vibecession selfies scenester pop-up. Authentic tattooed cupping hammock. Meh mixtape kogi lo-fi 90's, you probably haven't heard of them tousled bespoke asymmetrical wayfarers seitan. Ugh austin godard DIY big mood meh brunch ascot cronut.

### Blockquote with sub-blockquotes

```
> My editor thought, kindly, to set this bit apart.
>
> And then there was this other thing, not quite related that was also set apart.
>> "I'm the editor and I approve of setting these bits apart." [ed.]
```

> My editor thought, kindly, to set this bit apart.
>
> And then there was this other thing, not quite related that was also set apart.
>
> > "I'm the editor and I approve of setting these bits apart." [ed.]

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
