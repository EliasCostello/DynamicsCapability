# DynamicsCapability

Hi my name is Elias Costello. I worked as a Dynamics Consultant for Plus Consulting from June 7- August 13th. In these files you will see some of the code that I built to configure the base Dynamics system. Below I will explain each file for convenience.

ConvertOpptoOrder_EMC - C# It takes two inputs from the Dynamics environment that being opportunity and order. Opportunity is the relevant opportunity, and order can be found after you add a step (create a order) within a workflow. You take the order from the previous step and the code takes all the relevant information from Opportunity Products and loads it onto the Order with matching information.

ConvertOpptoQuote - C# It takes two inputs from the Dynamics environment that being opportunity and quote. Opportunity is the relevant opportunity, and quote can be found after you add a step (create a quote) within a workflow. You take the order from the previous step and the code takes all the relevant information from Opportunity Products and loads it onto the Quote with matching information.

Opp2OrderMessages2 - C# This code is something I came across that helps simplify code. It does the same thing as ConvertOpptoOrder_EMC with less steps. It only needs an Opportunity input. This code references a Microsoft library that generates a new order and also uploads that order with information from opportunity

ShowHideQuotesTab - Javascript This simple code hides the "Quotes" tab once a data field (in my case client type) is changed.
